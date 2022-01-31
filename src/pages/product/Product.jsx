import React, { useState, useEffect } from 'react'
import { getProduct, putProduct, deleteProduct, postProduct, getCategory } from '../../api'
import useFetch from '../../hooks/useFetch'
import Form from './Form'
import Button from '../../shared/components/Button'
import { notifySuccess } from '../../utils/Notify'
import Question from '../../shared/components/Question'
import search from '../../assets/images/samples/search.png'

const Product = ({title}) => {
  const { listData, isLoading, setListData, handleData } = useFetch(getProduct)
  const [dataForm, setDataForm] = useState(null)
  const [idEdit, setIdEdit] = useState(null)
  const [id, setId] = useState(null)
  const [isNew, setIsNew] = useState(false)

  const save = async (obData) => {
    console.log('demo')
    console.log(obData)
    let copiListaData = [...listData]
    if (idEdit || dataForm) {
      const { nameproduct, descriptionproduct, idcategory, namecategory, stockproduct, pricesaleproduct, pricepurchaseproduct } = obData
      await handleData(putProduct, idEdit ? idEdit : dataForm.idproduct, obData)
      notifySuccess('Se actualizó correctamente')
      const newArray = copiListaData.map(x => x.idproduct !== (idEdit || dataForm.idproduct) ? x : { ...x, nameproduct, descriptionproduct, idcategory, namecategory, stockproduct, pricesaleproduct, pricepurchaseproduct })
      setListData(newArray)
      closeModal()
    } else {
      console.log(obData)
      const newCategory = await handleData(postProduct, obData)
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

  const handleEdit = async (item) => {
    setIdEdit(item.idproduct)
    setDataForm(item)
  }

  const handleDelete = async (value, confirm) => {
    if(value){
      setId(value)
    }
    if(confirm){
      const copiListaData = [...listData]
      await handleData(deleteProduct, id)
      const newArray = copiListaData.filter(x => x.idproduct !== id)
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
                      <th>Nombre</th>
                      <th>Descripción Categoria</th>
                      <th>Categoría</th>
                      <th>Sctock</th>
                      <th>Precio Compra</th>
                      <th>Precio Venta</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listData.length > 0 ?
                      listData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.idproduct}</td>
                          <td>{item.nameproduct}</td>
                          <td>{item.descriptionproduct}</td>
                          <td>{item.namecategory}</td>
                          <td>{item.stockproduct}</td>
                          <td>{item.pricepurchaseproduct}</td>
                          <td>{item.pricesaleproduct}</td>
                          <td>
                            <div className='d-flex'>
                              <Button click={() => handleEdit(item)} text='Editar'></Button>
                              <div className='ms-3'>
                                <Button click={() => handleDelete(item.idproduct)} disabled={item.idproduct !== id ? isLoading : false} show={item.idproduct == id ? isLoading : false} loading="Eliminar" text='Eliminar'></Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )) : <tr>
                        <td colSpan={8} className='text-center'>
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

export default Product;
