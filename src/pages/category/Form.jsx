import React, { useState } from 'react';
import Modal from '../../shared/components/Modal';
import Button from '../../shared/components/Button';
const Form = ({data:{namecategory, descriptioncategory}, idItem, postSave, isLoading}) => {
  const [obData, setObData] = useState({namecategory, descriptioncategory})

  const handleChange = ({ target: { name, value } }) => {
    setObData({
      ...obData,
      [name]: value
    })
  }
  
  return <Modal>
    <form onSubmit={(e)=>{e.preventDefault();postSave(obData)}}>
      <div className='modal-body'>
        <div className="mb-3">
          <label htmlFor="namecategory" className="form-label">Nombre</label>
          <input type="text" name="namecategory" className="form-control" value={obData.namecategory || ''} onChange={handleChange} id="namecategory" />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptioncategory" className="form-label">Descripción</label>
          <input type="text" name="descriptioncategory" className="form-control" value={obData.descriptioncategory || ''} onChange={handleChange} id="descriptioncategory" />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-light-primary" data-bs-dismiss="modal">
          <i className="bx bx-x d-block d-sm-none"></i>
          <span className="d-none d-sm-block">Cerrar</span>
        </button>
        <Button text={idItem ? 'Actualizar':'Guardar'} show={isLoading} loading="Guardar"></Button>
      </div>
    </form>
  </Modal>
};

export default Form;
