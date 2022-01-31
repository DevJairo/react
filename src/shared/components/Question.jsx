import React from 'react';
import Modal from './Modal'

const Question = ({deleteItem}) => {
  return <Modal>
      <div className='p-5'>
        <h6 className='text-center pb-2'>¿Estas seguro que deseas Eliminar?</h6>
        <div className='text-center mt-4'>
            <div className='row justify-content-center'>
                <div className='col-3'>
                    <button className='btn btn-light-primary me-2 btn-block' data-bs-dismiss="modal">No</button>
                </div>
                <div className='col-3'>
                    <button onClick={()=> deleteItem(null,true)} className='btn btn-primary ms-2 btn-block'>Si</button>
                </div>
            </div>
        </div>
      </div>
  </Modal>;
};

export default Question;