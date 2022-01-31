import React, { useState, useEffect } from 'react';
import { getCustomer, putCustomer, deleteCustomer, postCustomer } from '../../api';
import useFetch from '../../hooks/useFetch';
import Form from './Form';
import Button from '../../shared/components/Button';
import { notifySuccess } from '../../utils/Notify'
import Question from '../../shared/components/Question'
import search from '../../assets/images/samples/search.png'

const Customer = ({ title }) => {
  const { listData, isLoading, setListData, handleData } = useFetch(getCustomer)
  const [dataForm, setDataForm] = useState(null)
  const [idEdit, setIdEdit] = useState(null)
  const [id, setId] = useState(null)
  const [isNew, setIsNew] = useState(false)

  const save = async (obData) => {
    let copiListaData = [...listData]
    if (idEdit || dataForm) {
      const { numberdocumentcustomer, businessname, phonecustomer, emailcustomer, adresscustomer } = obData
      await handleData(putCustomer, idEdit ? idEdit : dataForm.idcustomer, obData)
      notifySuccess('Se actualizó correctamente')
      const newArray = copiListaData.map(x => x.idcustomer !== (idEdit || dataForm.idcustomer) ? x : { ...x, numberdocumentcustomer, businessname, phonecustomer, emailcustomer, adresscustomer })
      setListData(newArray)
      closeModal()
    } else {
      const newCategory = await handleData(postCustomer, obData)
      console.log(newCategory)
      notifySuccess('Se agregó correctamente')
      setListData([newCategory, ...copiListaData])
      setDataForm(newCategory)
      closeModal()
    }
  }

  const cleanIdEdit = () => {
    setIdEdit(null)
    setDataForm(null)
    setIsNew(false)
    setId(null)
  }

  const handleAdd = () => {
    setIsNew(true)
  }

  const handleEdit = (item) => {
    setIdEdit(item.idcustomer)
    setDataForm(item)
  }

  const handleDelete = async (value, confirm) => {
    if(value){
      setId(value)
    }
    if(confirm){
      const copiListaData = [...listData]
      await handleData(deleteCustomer, id)
      const newArray = copiListaData.filter(x => x.idcustomer !== id)
      closeModal()
      setListData(newArray)
      setId(null)
    }
  }

  const closeModal = () => {
    var myModalEl = document.getElementById('modalGeneral')
    var modal = window.bootstrap.Modal.getInstance(myModalEl)
    modal.hide()
  }

  
  const openModal = () => {
    let myModal = new window.bootstrap.Modal(document.getElementById('modalGeneral'))
    myModal.show()
    window.addEventListener('hidden.bs.modal', cleanIdEdit)
  }

  useEffect(() => {
    if (idEdit) {
      openModal()
    }
    if (isNew) {
      openModal()
    }
    if (id) {
      openModal()
    }
    return () => {
      window.removeEventListener('hidden.bs.modal', cleanIdEdit)
    }
  }, [idEdit, isNew, id])

  return (
    <section id="basic-horizontal-layouts">
      {
        (idEdit || isNew) && <Form data={dataForm ? dataForm : {}} idItem={dataForm} postSave={save} isLoading={isLoading}></Form>
      }
      {
        id && <Question deleteItem={handleDelete}></Question>
      }
      <div className="row match-height">
        <div className="col-md-12 col-12">
          <div className="card p-5">
            <div className="card-content">
              <div className='d-flex justify-content-between mb-4'>
                <h5>{title}</h5>
                <a className='btn-crud cursor-pointer' onClick={() => handleAdd()}> <i className='bi bi-plus-lg'></i> Nuevo Cliente</a>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Ruc</th>
                      <th>Razon Social</th>
                      <th>Teléfono</th>
                      <th>Correo</th>
                      <th>Dirección</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listData.length > 0 ?
                      listData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.idcustomer}</td>
                          <td>{item.numberdocumentcustomer}</td>
                          <td>{item.businessname}</td>
                          <td>{item.phonecustomer}</td>
                          <td>{item.emailcustomer}</td>
                          <td>{item.adresscustomer}</td>
                          <td>
                            <div className='d-flex'>
                              <Button click={() => handleEdit(item)} text='Editar'></Button>
                              <div className='ms-3'>
                                <Button click={() => handleDelete(item.idcustomer)} disabled={item.idcustomer !== id ? isLoading : false} show={item.idcustomer == id ? isLoading : false} loading="Eliminar" text='Eliminar'></Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )) : <tr>
                      <td colSpan={7} className='text-center'>
                          <p className='mt-5'>
                            <img src={search} alt="" />
                          </p>
                          <p>Cargando información ...</p>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Customer;
