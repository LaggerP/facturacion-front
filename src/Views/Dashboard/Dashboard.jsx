import React from "react";

import './Dashboard.scss';

import { Navbar, Container, Col, Row, Button } from "react-bootstrap";

import {Download, Pencil} from "react-bootstrap-icons"

function Dashboard() {
  return (
    <div className="dashboard">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <p className="notflix">NotFlix</p>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <img
                            alt="Perfil"
                            src={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"}
                            width="50"
                            height="50"
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        <Container>
        <p className="titulo" style={{paddingTop:40}}>¡Hola,&nbsp;<span style={{color: "#C78C36"}}> Username</span>! Es bueno tenerte de nuevo</p>
        </Container>
        <div>
            <Container className="containerDashboard">
                <Row>
                    <Col xs={6}>
                        <Row>
                            <Container className="containerDentro">
                                <p className="titulo" style={{fontSize:"25px", marginLeft:0}}>Última factura:</p>
                                <Button type="primary" bsPrefix="boton"><Download style={{marginRight:"10px"}}/>Descargar</Button>
                                <Button type="primary" bsPrefix="boton">+ Ver Facturas</Button>
                            </Container>
                        </Row>
                        <Row>
                            <Container className="containerDentro">
                                <p className="titulo" style={{fontSize:"25px", marginLeft:0}}>Método de pago:</p>
                                <Container className="containerPago">
                                    <img
                                        alt="tarjeta"
                                        src={"https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Symbol.jpg"}
                                        width="100"
                                        height="50"
                                        style={{borderRadius:5, margin:10, float:"left"}}
                                    />
                                    <p className="titulo" style={{fontSize:"20px", marginLeft:0, paddingTop:20}}>**** **** **** 1234 <Pencil style={{marginLeft:"10px"}}/></p>
                                    <p className="titulo" style={{fontSize:"20px", marginLeft:10}}><span style={{fontWeight:"bold"}}>Nombre y Apellido</span>: Username</p>
                                    <p className="titulo" style={{fontSize:"20px", marginLeft:10}}><span style={{fontWeight:"bold"}}>Vencimiento</span>: xx/yy</p>
                                </Container>
                            </Container>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Container className="containerDentro" style={{height:510.5}}>
                            <p className="titulo" style={{fontSize:"25px", marginLeft:0, paddingTop:20}}>Suscripciones contratadas:</p>
                            <Container className="suscripciones">
                                <img
                                    alt="futbol"
                                    src={"https://static10.tgstat.ru/channels/_0/33/332ade91fec68a741f4a31f930849649.jpg"}
                                    width="50"
                                    height="50"
                                    style={{borderRadius:5, margin:10, float:"left"}}
                                />
                                <p className="titulo" style={{fontSize:"20px", marginLeft:0, paddingTop:15}}>Pack Fútbol</p>
                            </Container>
                            <Container className="suscripciones">
                                <img
                                    alt="natgeo"
                                    src={"https://pbs.twimg.com/profile_images/840296895763357698/DbjCavzG_400x400.jpg"}
                                    width="50"
                                    height="50"
                                    style={{borderRadius:5, margin:10, float:"left"}}
                                />
                                <p className="titulo" style={{fontSize:"20px", marginLeft:0, paddingTop:15}}>Pack National Geographic</p>
                            </Container>
                            <Container style={{display:"flex", justifyContent:'flex-end', marginTop:190}}>
                                <Button type="primary" bsPrefix="botonSuscripciones">Ver mis suscripciones</Button>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
   
  );
}

export default Dashboard;
