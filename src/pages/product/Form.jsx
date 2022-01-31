import React, { useState } from 'react';
import Modal from '../../shared/components/Modal';
import Button from '../../shared/components/Button';
import useFetch from '../../hooks/useFetch';
import { getCategory } from '../../api';
const Form = ({ data: { nameproduct, descriptionproduct, idcategory, namecategory, stockproduct, pricesaleproduct, pricepurchaseproduct }, idItem, postSave, isLoading }) => {

  const [obData, setObData] = useState({ nameproduct, descriptionproduct, idcategory, namecategory, stockproduct, pricesaleproduct, pricepurchaseproduct })
  const { listData } = useFetch(getCategory)

  const handleChange = ({ target: { name, value } }) => {
    setObData({
      ...obData,
      [name]: value,

    })
    if (name === 'idcategory') {
      const { namecategory } = listData.find(x => x.idcategory === value)
      setObData({
        ...obData,
        namecategory: namecategory,
        [name]: value

      })
    }
  }

  return <Modal>
    <form onSubmit={(e) => { e.preventDefault(); postSave(obData) }}>
      <div className='modal-body'>
        <div className="mb-3">
          <label htmlFor="nameproduct" className="form-label">Nombre</label>
          <input type="text" name="nameproduct" className="form-control" value={obData.nameproduct || ''} onChange={handleChange} id="nameproduct" />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionproduct" className="form-label">Descripción</label>
          <input type="text" name="descriptionproduct" className="form-control" value={obData.descriptionproduct || ''} onChange={handleChange} id="descriptionproduct" />
        </div>
        <div className='mb-3'>
          <label htmlFor="idcategory" className="form-label">Categoría</label>
          <select className="form-select" value={obData.idcategory} id="idcategory" name="idcategory" onChange={handleChange}>
            { !obData.idcategory && <option selected>Seleccione</option>}
            {
              listData.length > 0 ? listData.map((item, index) => (
                <option key={index} value={item.idcategory}>{item.namecategory}</option>
              )) : <option>Cargando ...</option>
            }
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="stockproduct" className="form-label">Stock</label>
          <input type="text" name="stockproduct" className="form-control" value={obData.stockproduct || ''} onChange={handleChange} id="stockproduct" />
        </div>
        <div className="mb-3">
          <label htmlFor="pricepurchaseproduct" className="form-label">Precio Compra</label>
          <input type="text" name="pricepurchaseproduct" className="form-control" value={obData.pricepurchaseproduct || ''} onChange={handleChange} id="pricepurchaseproduct" />
        </div>
        <div className="mb-3">
          <label htmlFor="pricesaleproduct" className="form-label">Precio Venta</label>
          <input type="text" name="pricesaleproduct" className="form-control" value={obData.pricesaleproduct || ''} onChange={handleChange} id="pricesaleproduct" />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-light-primary" data-bs-dismiss="modal">
          <i className="bx bx-x d-block d-sm-none"></i>
          <span className="d-none d-sm-block">Cerrar</span>
        </button>
        <Button text={idItem ? 'Actualizar' : 'Guardar'} show={isLoading} loading="Guardar"></Button>
      </div>
    </form>
  </Modal>
};

export default Form;
