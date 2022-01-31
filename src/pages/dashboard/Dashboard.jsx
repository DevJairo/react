import React from 'react';
import avatar from '../../assets/images/faces/1.jpg'

const Dashboard = ({ title }) => {
  return <section className='row'>
    <div className="col-12 col-lg-9">
      <div className="row">
        <div className='col-6 col-lg-3 col-md-6'>
          <div className="card">
            <div className="card-body px-3 py-4-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="stats-icon purple">
                    <i className="bi bi-journal-text"></i>
                  </div>
                </div>
                <div className="col-md-8">
                  <h6 className="text-muted font-semibold">Facturas</h6>
                  <h6 className="font-extrabold mb-0">230</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 col-lg-3 col-md-6'>
          <div className="card">
            <div className="card-body px-3 py-4-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="stats-icon blue">
                    <i className="bi bi-people"></i>
                  </div>
                </div>
                <div className="col-md-8">
                  <h6 className="text-muted font-semibold">Clientes</h6>
                  <h6 className="font-extrabold mb-0">230</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 col-lg-3 col-md-6'>
          <div className="card">
            <div className="card-body px-3 py-4-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="stats-icon green">
                    <i className="bi bi-folder"></i>
                  </div>
                </div>
                <div className="col-md-8">
                  <h6 className="text-muted font-semibold">Categorias</h6>
                  <h6 className="font-extrabold mb-0">230</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 col-lg-3 col-md-6'>
          <div className="card">
            <div className="card-body px-3 py-4-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="stats-icon red">
                    <i className="bi bi-bag"></i>
                  </div>
                </div>
                <div className="col-md-8">
                  <h6 className="text-muted font-semibold">Productos</h6>
                  <h6 className="font-extrabold mb-0">230</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='col-12 col-lg-3'>
      <div className="card">
        <div className="card-body py-4 px-5">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-xl">
              <img src={avatar} alt="Face 1" />
            </div>
            <div className="ms-3 name">
              <h5 className="font-bold">Jairo Machuca</h5>
              <h6 className="text-muted mb-0">@jmachuca</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default Dashboard;
