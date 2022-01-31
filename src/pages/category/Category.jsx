import React, { useEffect, useState, useRef } from 'react';
import { getCategory, putCategory, deleteCategory, postCategory } from '../../api';
import useFetch from '../../hooks/useFetch';
import Form from './Form';
import Button from '../../shared/components/Button';
import {notifySuccess} from '../../utils/Notify'
import Question from '../../shared/components/Question';
import search from '../../assets/images/samples/search.png'

const Category = ({title}) => {
  const { listData, isLoading, setListData, handleData } = useFetch(getCategory)
  const [dataForm, setDataForm] = useState(null)
  const [idEdit, setIdEdit] = useState(null)
  const [id, setId] = useState(null)
  const [isNew, setIsNew] = useState(false)

  const save = async (obData) => {
    let copiListaData = [...listData]
    if (idEdit || dataForm) {
      const { namecategory, descriptioncategory } = obData
      await handleData(putCategory, idEdit ? idEdit : dataForm.idcategory, obData)
      notifySuccess('Se actualizó correctamente')
      const newArray = copiListaData.map(x => x.idcategory !== (idEdit || dataForm.idcategory) ? x : { ...x, namecategory, descriptioncategory })
      setListData(newArray)
      closeModal()
    } else {
      const newCategory = await handleData(postCategory, obData)
      notifySuccess('Se agregó correctamente')
      setListData([newCategory, ...copiListaData])
      setDataForm(newCategory)
      closeModal()
    }
  }

  const edit = (item) => {
    setIdEdit(item.idcategory)
    setDataForm(item)
  }

  const deleteItem = async (value, confirm) => {
    if(value){
      setId(value)
    }
    if(confirm){
      const copiListaData = [...listData]
      await handleData(deleteCategory, id)
      const newArray = copiListaData.filter(x => x.idcategory !== id)
      closeModal()
      setListData(newArray)
      setId(null)
    }
  }

  const cleanIdEdit = () => {
    setIdEdit(null)
    setDataForm(null)
    setIsNew(false)
    setId(null)
  }

  const closeModal = () => {
    var myModalEl = document.getElementById('modalGeneral')
    var modal = window.bootstrap.Modal.getInstance(myModalEl)
    modal.hide()
  }

  const newItem = () => {
    setIsNew(true)
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
        id && <Question deleteItem={deleteItem}></Question>
      }
      <div className="row match-height">
        <div className="col-md-12 col-12">
          <div className="card p-5">
            <div className="card-content">
              <div className='d-flex justify-content-between mb-4'>
                <h5>{title}</h5>
                <a className='btn-crud cursor-pointer' onClick={() => newItem()}> <i className='bi bi-plus-lg'></i> Nueva categoria</a>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Categoria</th>
                      <th>Descripción</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    { listData.length > 0 ?
                      listData.map((item, index) => (
                        <tr key={index}>
                          <td className="text-bold-500">{item.idcategory}</td>
                          <td className="text-bold-500">{item.namecategory}</td>
                          <td className="text-bold-500">{item.descriptioncategory}</td>
                          <td>
                            <div className='d-flex'>
                              <Button click={() => edit(item)} text='Editar'></Button>
                              <div className='ms-3'>
                                <Button click={() => deleteItem(item.idcategory)} disabled={item.idcategory !== id ? isLoading : false} show={item.idcategory == id ? isLoading : false} loading="Eliminar" text='Eliminar'></Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )) : <tr>
                        <td colSpan={4} className='text-center'>
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
}

export default Category
