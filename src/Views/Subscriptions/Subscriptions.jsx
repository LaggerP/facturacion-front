import React from "react";
import './Subscriptions.scss';
import {Container, Col, Row, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

function Subscriptions() {
    return (
        <div className="subscriptions">
            <Container>
                <Row>
                    <Col sm={12} md={8} xl={10}>
                        <p className="subscriptionsTitle">Suscripciones</p>
                    </Col>
                    <Col sm={12} md={4} xl={2}>
                        <Link to="/packages">
                            <Button type="primary" bsPrefix="button">+ Paquetes</Button>
                        </Link>
                        <p className="clickText">Haga click aqui para contratar más paquetes</p>
                    </Col>
                </Row>
                <Row>
                    <p className="contractedPackages">Paquetes Contratados</p>
                </Row>
                <Row>
                    <Container className="package">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="packageName">Pack Futbol</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="cancel btnTextColor">Cancelar Suscripción</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="package">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="packageName">Pack Disney</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="cancel btnTextColor">Cancelar Suscripción</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="package">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="packageName">Pack Marvel</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="cancel btnTextColor">Cancelar Suscripción</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="package">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="packageName">Pack National Geographic</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="cancel btnTextColor">Cancelar Suscripción</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <p className="contractedPackages">Facturación</p>
                </Row>
                <Row>
                    <Container className="package">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="packageName">Tu próxima fecha de facturación es el 30/09/2021</p>
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                <Button type="primary" bsPrefix="cancel btnTextColor">Cambiar día de facturación</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <p className="downText">Las cuotas de las suscripciones se facturan al principio de cada período y podrían aparecer en tu cuenta algunos días después de la fecha de facturación.</p>
                </Row>
            </Container>
        </div>
    );
}

export default Subscriptions;