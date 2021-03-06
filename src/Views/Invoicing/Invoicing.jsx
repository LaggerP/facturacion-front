import React, {useContext} from "react";
import './Invoicing.scss';
import {Container, Col, Row, Button, Spinner} from "react-bootstrap";
import {useEffect, useCallback} from "react";
import {apiUrl} from "../../Helper";
import { useCookies } from 'react-cookie';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "../../Assets/home.png";

function Invoicing() {
    const [invoices, setInvoices] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [cookies] = useCookies(['cookie-name']);

    const fetchMyAPI = useCallback(async () => { //function to get the invoices that have the user

        let response = await fetch(`${apiUrl}/invoices/${cookies.user.userData.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.user.token
            }
        });
        response = await response.json()
        setInvoices(response.reverse())
        setIsLoading(false);
    }, [])

    const downloadInvoice = async (invoiceId, userId, invoiceNumber) => {
        let invoice = await fetch(`${apiUrl}/invoices/pdf/${userId}/${invoiceId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.user.token
            }
        });
        invoice = await invoice.json();
        const linkSource = `data:application/pdf;base64,${invoice}`;
        const downloadLink = document.createElement("a");
        const fileName = `Factura - #${invoiceNumber}.pdf`;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    useEffect(() => {
        fetchMyAPI()
    }, [fetchMyAPI]);

    return (
      <div className="invoicing">
            <nav aria-label="breadcrumb">
                <Container className="pt-4">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"> <a href="javascript:history.back()">
                        <img
                            alt=""
                            src={Home}/></a></li>
                    <li class="breadcrumb-item active" style={{color: "#C78C36"}}   aria-current="page">Facturas</li>
                </ol>
                </Container>
            </nav>
          {isLoading ?
          (
           <div style={{marginTop: 250}} >
          <Spinner class="border d-flex align-items-center justify-content-center" animation="border" role="status">
                <span class="visually-hidden">Loading...</span>
            </Spinner>
            </div>)
            : (
              <Container className="containerInvoicing">
                  <Row>
                      <Col sm={12} md={8} xl={10}>
                          <p className="invoicingTitle">??ltima factura</p>
                      </Col>
                  </Row>
                  <Row>
                      {
                        invoices.length == 0?
                        (
                            <Container className="lastInvoice">
                                <Row>
                                    <Col sm={12} md={1} lg={8}>
                                        <p
                                        className="invoiceInfo">No posee ninguna factura</p>
                                    </Col>
                                </Row>
                            </Container>
                        ):
                        (
                            invoices.map(function (inv, index, arr) {
                                const date = inv.createdAt
                                const strSplitDate = String(date).split(' ');
                                let newDate = new Date(strSplitDate[0]);
                                let dd = newDate.getDate();
                                let mm = newDate.getMonth() + 1; //January is 0!
                                const yyyy = newDate.getFullYear();
                                if (dd < 10) {
                                    dd = '0' + dd;
                                }
                                if (mm < 10) {
                                    mm = '0' + mm;
                                }
                                newDate = dd + "-" + mm + "-" + yyyy;
                                newDate.toString();
                                if (0 === index) {
                                    return (
                                        <Container className="lastInvoice">
                                            <Row>
                                                <Col sm={12} md={1} lg={8}>
                                                    <p
                                                    className="invoiceInfo">#{inv.invoiceNumber} | {newDate} | {inv.description}...</p>
                                                </Col>
                                                <Col sm={12} md={6} lg={4}
                                                    style={{display: "flex", justifyContent: "flex-end"}}>
                                                    <Button type="primary" bsPrefix="view btnTextColor"
                                                            onClick={() => downloadInvoice(inv.id, inv.userId, inv.invoiceNumber)}>Ver
                                                        factura</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    )
                                }
                            })
                        )
                      }
                  </Row>
                  <Row>
                      <p className="previousInvoices">Facturas anteriores</p>
                  </Row>
                  <Col sm={6} className="searchBar">
                    <div class="input-group">
                        <button type="button" class="btn btn-secondary">
                            <i class="bi-search"></i>
                        </button>
                        <input  className="form-control"
                                type="text"
                                placeholder="Ingrese aqu?? el n??mero de factura a buscar"
                                onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }}/>
                    </div>
                  </Col>
                  <Row>
                      {
                        invoices.length == 0?
                        (
                            <Container className="invoice">
                                <Row>
                                    <Col sm={12} md={6} lg={8}>
                                        <p className="invoiceInfo">No posee ninguna factura para visualizar hasta el momento.</p>
                                    </Col>
                                </Row>
                            </Container>
                        ):
                        (
                          invoices.filter((inv, index) => {
                              if (index > 0) {
                                  if (searchTerm === "") {
                                      return (
                                        <Container className="invoice">
                                            <Row>
                                                <Col sm={12} md={6} lg={8}>
                                                    <p className="invoiceInfo">#{inv.invoiceNumber} | date
                                                        | {inv.description}...</p>
                                                </Col>
                                                <Col sm={12} md={6} lg={4}
                                                     style={{display: "flex", justifyContent: "flex-end"}}>
                                                    <Button type="primary" bsPrefix="view btnTextColor">Ver
                                                        factura</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                      )
                                  } else if (inv.invoiceNumber.toLowerCase().startsWith(searchTerm.toLowerCase())) {
                                      return (
                                        <Container className="invoice">
                                            <Row>
                                                <Col sm={12} md={6} lg={8}>
                                                    <p className="invoiceInfo">#{inv.invoiceNumber} | date
                                                        | {inv.description}...</p>
                                                </Col>
                                                <Col sm={12} md={6} lg={4}
                                                     style={{display: "flex", justifyContent: "flex-end"}}>
                                                    <Button type="primary" bsPrefix="view btnTextColor">Ver
                                                        factura</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                      )
                                  } else return false
                              } else return false
                          }).map((inv, index) => {
                              const date = inv.createdAt
                              const strSplitDate = String(date).split(' ');
                              let newdate = new Date(strSplitDate[0]);
                              let dd = newdate.getDate();
                              let mm = newdate.getMonth() + 1;
                              const yyyy = newdate.getFullYear();
                              if (dd < 10) {
                                  dd = '0' + dd;
                              }
                              if (mm < 10) {
                                  mm = '0' + mm;
                              }
                              newdate = dd + "-" + mm + "-" + yyyy;
                              newdate.toString();
                              return (
                                <Container className="invoice">
                                    <Row>
                                        <Col sm={12} md={6} lg={8}>
                                            <p
                                              className="invoiceInfo">#{inv.invoiceNumber} | {newdate} | {inv.description}...</p>
                                        </Col>
                                        <Col sm={12} md={6} lg={4}
                                             style={{display: "flex", justifyContent: "flex-end"}}>
                                            <Button type="primary" bsPrefix="view btnTextColor"
                                                    onClick={() => downloadInvoice(inv.id, inv.userId, inv.invoiceNumber)}>Ver
                                                factura</Button>
                                        </Col>
                                    </Row>
                                </Container>
                              )
                          })
                        )
                      }
                  </Row>
                  <Row>
                      <p className="downText">NOTA: Solo se muestra el ??ltimo a??o del historial de facturaci??n.</p>
                  </Row>
              </Container>)
          }
      </div>

    );
}

export default Invoicing;
