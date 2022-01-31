import React, { useEffect, useState } from 'react'
import { getInvoice } from '../../api'
import Detail from './Detail'
import useFetch from '../../hooks/useFetch'
import Button from '../../shared/components/Button'

const Invoice = ({title}) => {
  const [id, setId] = useState(null)
  const { listData, detailData, isLoading, handleData } = useFetch(getInvoice)

  const verPdf = async (value) => {
    setId(value)
    await handleData(getInvoice, value)
    var myModal = new window.bootstrap.Modal(document.getElementById('modalGeneral'))
    myModal.show()
    setId(null)
  }

  return (
    <section id="basic-horizontal-layouts">
      <Detail detailData={detailData}></Detail>
      <div className="row match-height">
        <div className="col-md-12 col-12">
          <div className="card p-5">
            <div className="card-content">
            <div className='d-flex justify-content-between mb-4'>
                <h5>{title}</h5>
                <a className='btn-crud cursor-pointer' onClick={() => {}}> <i className='bi bi-plus-lg'></i> Nueva factura</a>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Cliente</th>
                      <th>Fecha</th>
                      <th>Precio Total</th>
                      <th>Estado</th>
                      <th>Medio de Pago</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listData.map((item, index) => (
                        <tr key={index}>
                          <td className="text-bold-500">{item.idsale}</td>
                          <td className="text-bold-500">{item.businessname}</td>
                          <td>{item.datesale}</td>
                          <td className="text-bold-500">{item.totalpricesale}</td>
                          <td>{item.status}</td>
                          <td>{item.nametypepayment}</td>
                          <td>
                            <Button click={() => verPdf(item.idsale)} text='Ver pdf' disabled={item.idsale !== id ? isLoading : false} show={item.idsale == id ? isLoading : false} loading="Ver pdf"></Button>
                          </td>
                        </tr>
                      ))
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
export default Invoice