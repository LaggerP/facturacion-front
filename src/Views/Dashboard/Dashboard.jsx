import React, {useContext,useEffect} from "react";

import './Dashboard.scss';

import {Container, Col, Row, Button} from "react-bootstrap";

import {Link} from 'react-router-dom';

import {Download, Pencil} from "react-bootstrap-icons"

import { UserContext } from "../../context/UserContext";
import { token,client,apiUrl } from "../../Helper";

function Dashboard() {

    const { userData, userLogged, setUserData, setUserLogged } = useContext(UserContext);

    const validarUsuario = async () => {
      
        let request = await fetch(`${apiUrl}users/${client}/${token}`, {
           method: 'GET',
           headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
           }
        });
        let response = await request.json();
        

        if (request.status !== 200) {
            setUserLogged(false);
        } else {
            setUserData(response);
            setUserLogged(true);
        }
    }

    useEffect( async () => {
        await validarUsuario();
    }, []);

    if(userData && userLogged){
        return (
            <div className="dashboard">
                <Container>
                    <p className="welcomeTitle">¡Hola, {userData.userData.firstName}! Es bueno tenerte de nuevo</p>
                </Container>
                <Container className="containerDashboard">
                    <Row>
                        <Col sm={12} md={6} xl={{span:5, offset:1}}>
                            <Row>
                                <Container className="containerInside">
                                <Row>
                                    <p className="text">Última factura:</p>
                                </Row>
                                <Row>
                                <Col xl={{span:5, offset:1}}>
                                    <Button type="primary" bsPrefix="buttonInvoice"><Download style={{marginRight:"10px"}}/>Descargar</Button>
                                </Col>
                                <Col xl={4}>
                                    <Link to="/invoices">
                                        <Button type="primary" bsPrefix="buttonInvoice">+ Ver Facturas</Button>
                                    </Link>
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
                                                <p className="subtext">{userData.userData.firstName} {userData.userData.lastName}</p>
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
                            <Col sm={12} md={5} xl={5} style={{paddingBottom:50}}>
                                <Container className="containerInside" style={{height:'100%'}}>
                                    <Row>
                                        <p className="text">Suscripciones contratadas:</p>
                                    </Row>
                                    <Col xl={{span:10, offset:1}} style={{height:'100%'}}>
                                        <Row className="subscriptionsContainer">
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
                                        <Row className="subscriptionsContainer">
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
                                            <Link to="/subscriptions">
                                                <Button type="primary" bsPrefix="buttonSubscriptions">Ver mis suscripciones</Button>
                                            </Link>
                                        </Row>
                                    </Col>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
            </div>
           
        );
    } else {
        return <div className="dashboard">
                    <Container>
                        <Row style={{paddingTop:30}}>
                            <Col style={{background: '#ffffff',border: "1px solid #C78C36"}}>
                                <p style={{color: '#D11B1B', fontWeight:'bold', fontSize:40, textAlign:'center'}}>¡UPS!</p>
                                <p style={{textAlign:'center', fontSize:18, textAlign:'center'}}>Ocurrio un error interno y no se pudo llevar a cabo la operación</p>
                                <p style={{textAlign:'center', fontSize:18, textAlign:'center'}}>Por favor, intenta ingresar nuevamente a la sesión.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>;
        
    }
  
}

export default Dashboard;
