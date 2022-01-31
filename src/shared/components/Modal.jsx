import React from 'react';

const Modal = ({largo, children}) => {
    return (
        <div className="modal fade text-left" id="modalGeneral" tabIndex="-1" role="dialog"
            aria-labelledby="myModalLabel1" aria-hidden="true">
            <div className={largo ? 'modal-dialog modal-lg':'modal-dialog'} role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
