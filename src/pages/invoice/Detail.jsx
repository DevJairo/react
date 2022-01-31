import React from 'react'
import './detail.scss'
import Modal from '../../shared/components/Modal'
export default function Detail({ detailData }) {
  return (
    <Modal largo={true}>
      <div className="modal-body">
        <div className="factura">
          <div className="content-factura">
            <table style={{ borderBottom: "solid 1px #000", marginBottom: "5px" }}>
              <tbody>
                <tr>
                  <td width="50%" style={{ paddingBottom: "10px" }}>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ padding: "20px 0 4px 20px", fontSize: "20px", fontWeight: "bold" }}>
                            <strong>SERMIJAMCSA</strong>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: "5px 20px" }}>
                            <strong> MACHUCA CONDOR JHERAL ALBERTO</strong>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: "5px 20px" }}>
                            SECTOR 7 GRUPO 2 A MZA. A LOTE. 24 INT. 2º ALT.
                            CRUCE AVS. J. OLAYA Y MARIA MOYANO
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: "5px 20px" }}>
                            VILLA EL SALVADOR - LIMA - LIMA
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="50%" style={{ padding: "15px 15px 10px 100px", verticalAlign: "top" }}>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ border: "solid 2px #000", textAlign: "center" }}>
                            <p><strong>FACTURA ELECTRONICA</strong></p>
                            <p><strong>RUC: 10458531205</strong></p>
                            <p><strong>E001-129</strong></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table style={{ marginBottom: "5px" }}>
              <tbody>
                <tr>
                  <td width="50%" style={{ padding: "5px 20px" }}>
                    <table className="list">
                      <tbody>
                        <tr>
                          <td width="40%">Fecha de Vencimiento</td>
                          <td width="3%">:</td>
                          <td className="text-bold" width="62%">{detailData.dateend}</td>
                        </tr>
                        <tr>
                          <td width="40%">Fecha de Emisión</td>
                          <td>:</td>
                          <td className="text-bold">{detailData.datesale}</td>
                        </tr>
                        <tr>
                          <td width="40%">Señor(es)</td>
                          <td>:</td>
                          <td className="text-bold">{detailData.businessname}</td>
                        </tr>
                        <tr>
                          <td width="40%">RUC</td>
                          <td>:</td>
                          <td className="text-bold">20480873026</td>
                        </tr>
                        <tr>
                          <td width="40%">Dirección del Cliente</td>
                          <td>:</td>
                          <td className="text-bold">
                            CAL. CORONEL GOMEZ 135 ---- BARR. EL MOLINO LA
                            LIBERTAD-TRUJILLO-TRUJILLO
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">Tipo de Moneda</td>
                          <td>:</td>
                          <td className="text-bold">SOLES</td>
                        </tr>
                        <tr>
                          <td width="40%">Observación</td>
                          <td>:</td>
                          <td className="text-bold"></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="50%" style={{ padding: "5px 20px", verticalAlign: "top", textAlign: "right" }}>
                    <p>
                      GUIA DE REMISION REMITENTE : <strong>0001 000761</strong>
                    </p>
                    <p>Tipo de Transacción : <strong>{detailData.nametypepayment}</strong></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 20px" }}>
                    <table>
                      <thead>
                        <tr className="head-table">
                          <th>Cantidad</th>
                          <th>Unidad</th>
                          <th>Medida</th>
                          <th>Descripción</th>
                          <th>Unitario</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="body-table">
                          <td>10</td>
                          <td>-</td>
                          <td>Unidad</td>
                          <td>
                            LAMPARA MINERA KOMBA X80 C/CARGADOR INDIVIDUAL
                          </td>
                          <td>186.44</td>
                          <td>1,864.40</td>
                        </tr>
                        <tr>
                          <td style={{ height: "20px" }}></td>
                          <td style={{ height: "20px" }}></td>
                          <td style={{ height: "20px" }}></td>
                          <td style={{ height: "20px" }}></td>
                          <td style={{ height: "20px" }}></td>
                          <td style={{ height: "20px" }}></td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="noborder"></td>
                          <td className="unosolo"><strong>Sub Total</strong></td>
                          <td className="unosolo">1,864.40</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="noborder"></td>
                          <td className="unosolo"><strong>IGV</strong></td>
                          <td className="unosolo">335.59</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="noborder"></td>
                          <td className="unosolo"><strong>TOTAL</strong></td>
                          <td className="unosolo">2,199.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn" data-bs-dismiss="modal">
          <i className="bx bx-x d-block d-sm-none"></i>
          <span className="d-none d-sm-block">Cerrar</span>
        </button>
        <button type="button" className="btn btn-primary ml-1">
          <i className="bi bi-printer"></i> Imprimir
        </button>
      </div>
    </Modal>
  )
}
