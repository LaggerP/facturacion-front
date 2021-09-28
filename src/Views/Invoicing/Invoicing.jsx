import React from "react";
import './Invoicing.scss';
import {Container, Col, Row, Button, Form} from "react-bootstrap";

function Invoicing() {
    return (
        <div className="invoicing">
            <Container className="containerInvoicing">
                <Row>
                    <Col sm={12} md={8} xl={10}>
                        <p className="invoicingTitle">Última factura</p>
                    </Col>
                </Row>
                <Row>
                    <Container className="lastInvoice">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="invoiceInfo">#1254 | <b>17/08/2021</b> | Información de la suscripción  </p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <p className="previousInvoices">Facturas anteriores</p>
                </Row>         
                <Col sm={6} className="searchBar">
                    <Form.Control id="invoiceID" placeholder="Buscar" />
                </Col>
                <Row>
                    <Container className="invoice">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="invoiceInfo">#1253 | <b>17/07/2021</b> | Información de la suscripción</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="invoice">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="invoiceInfo">#1252 | <b>17/06/2021</b> | Información de la suscripción</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="invoice">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="invoiceInfo">#1251 | <b>17/05/2021</b> | Información de la suscripción</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="invoice">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="invoiceInfo">#1250 | <b>17/04/2021</b> | Información de la suscripción</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <p className="downText">NOTA: Solo se muestra el último año del historial de facturación.</p>
                </Row>
            </Container>
        </div>
    );
}

export default Invoicing;