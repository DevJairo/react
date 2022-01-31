import React, { useState } from 'react';
import Modal from '../../shared/components/Modal';
import Button from '../../shared/components/Button';
const Form = ({data:{numberdocumentcustomer, businessname, phonecustomer, emailcustomer, adresscustomer }, idItem, postSave, isLoading}) => {
  const [obData, setObData] = useState({numberdocumentcustomer, businessname, phonecustomer, emailcustomer, adresscustomer})

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
          <label htmlFor="numberdocumentcustomer" className="form-label">RUC</label>
          <input type="text" name="numberdocumentcustomer" className="form-control" value={obData.numberdocumentcustomer || ''} onChange={handleChange} id="numberdocumentcustomer" />
        </div>
        <div className="mb-3">
          <label htmlFor="businessname" className="form-label">Razon Social</label>
          <input type="text" name="businessname" className="form-control" value={obData.businessname || ''} onChange={handleChange} id="businessname" />
        </div>
        <div className="mb-3">
          <label htmlFor="phonecustomer" className="form-label">Teléfono</label>
          <input type="text" name="phonecustomer" className="form-control" value={obData.phonecustomer || ''} onChange={handleChange} id="phonecustomer" />
        </div>
        <div className="mb-3">
          <label htmlFor="emailcustomer" className="form-label">Email</label>
          <input type="text" name="emailcustomer" className="form-control" value={obData.emailcustomer || ''} onChange={handleChange} id="emailcustomer" />
        </div>
        <div className="mb-3">
          <label htmlFor="adresscustomer" className="form-label">Dirección</label>
          <input type="text" name="adresscustomer" className="form-control" value={obData.adresscustomer || ''} onChange={handleChange} id="adresscustomer" />
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
