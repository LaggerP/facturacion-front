import React from "react";

import './Dashboard.scss';

import {Container, Col, Row, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

import {Download, Pencil} from "react-bootstrap-icons"

function Dashboard() {
  return (
    <div className="dashboard">
        <Container>
            <p className="welcomeTitle">¡Hola, Username! Es bueno tenerte de nuevo</p>
        </Container>
        <Container className="containerDashboard">
            <Row>
                <Col sm={12} md={6} lg={{span:5, offset:1}}>
                    <Row>
                        <Container className="containerInside">
                        <Row>
                            <p className="text">Última factura:</p>
                        </Row>
                        <Row>
                        <Col lg={{span:5, offset:1}}>
                            <Button type="primary" bsPrefix="button"><Download style={{marginRight:"10px"}}/>Descargar</Button>
                        </Col>
                        <Col lg={4}>
                            <Button type="primary" bsPrefix="button">+ Ver Facturas</Button>
                        </Col>
                        </Row>
                        </Container>
                    </Row>
                    <Row style={{paddingTop:50, paddingBottom:50}}>
                        <Container className="containerInside">
                            <Row>
                                <p className="text">Método de pago:</p>
                            </Row>
                            <Col lg={{span:10, offset:1}}>
                            <Container className="containerPayment">
                                <Row >
                                    <Col xs={6} lg={4}>
                                        <img
                                            alt="tarjeta"
                                            src={"https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Symbol.jpg"}
                                            width="100"
                                            height="50"
                                            style={{borderRadius:5, marginTop:10, display:'flex', justifyContent:'flex-start'}}
                                        />
                                    </Col>
                                    <Col xs={6} lg={8}>
                                        <p className="subtext" style={{marginTop:20}}>**** **** **** 1234 <Pencil style={{fontSize:25}}/></p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={7}>
                                        <p className="subtext" style={{fontWeight:"bold"}}>Nombre y Apellido:</p>
                                    </Col>
                                    <Col lg={5}>
                                        <p className="subtext">Username</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={7}>
                                        <p className="subtext" style={{fontWeight:"bold"}}> Vencimiento:</p>
                                    </Col>
                                    <Col lg={5}>
                                        <p className="subtext">xx/yy</p>
                                    </Col>
                                </Row>
                                </Container>
                            </Col>
                            </Container>
                        </Row>
                    </Col>
                    <Col sm={12} md={5} lg={5} style={{paddingBottom:50}}>
                        <Container className="containerInside" style={{height:'100%'}}>
                            <Row>
                                <p className="text">Suscripciones contratadas:</p>
                            </Row>
                            <Col lg={{span:10, offset:1}} style={{height:'100%'}}>
                                <Row className="subscriptions">
                                    <Col xs={3} lg={2}>
                                        <img
                                            alt="futbol"
                                            src={"https://static10.tgstat.ru/channels/_0/33/332ade91fec68a741f4a31f930849649.jpg"}
                                            width="50"
                                            height="50"
                                            style={{borderRadius:5}}
                                        />
                                    </Col>
                                    <Col xs={9} lg={10}> 
                                        <p className="subtext">Pack Fútbol</p>
                                    </Col>
                                </Row>
                                <Row className="subscriptions">
                                    <Col xs={3} lg={2}>
                                    <img
                                        alt="natgeo"
                                        src={"https://pbs.twimg.com/profile_images/840296895763357698/DbjCavzG_400x400.jpg"}
                                        width="50"
                                        height="50"
                                        style={{borderRadius:5}}
                                    />
                                    </Col>
                                    <Col xs={9} lg={10}>
                                    <p className="subtext">Pack National Geographic</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <LinkContainer to="/subscriptions">
                                        <Button type="primary" bsPrefix="buttonSubscriptions">Ver mis suscripciones</Button>
                                    </LinkContainer>
                                </Row>
                            </Col>
                        </Container>
                    </Col>
                </Row>
            </Container>
    </div>
   
  );
}

export default Dashboard;
