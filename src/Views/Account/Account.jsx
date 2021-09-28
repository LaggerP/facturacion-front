import React from "react";

import './Account.scss';

import {Container, Col, Row} from "react-bootstrap";

function account() {
    
    return (
        <div className="account">
            <Container className="containerTitles" >
                <p className="accountTitle" >Cuenta</p>
                <p className="membershipTitle" >MIEMBRO DESDE MARZO 2018</p>
            </Container>

            <div style={{display:'flex', justifyContent:'center', padding:"15px"}}> 
               
                <Container >
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Row>
                                <p className="personalDataTitle">Datos Personales</p>
                                <Container className="informationContainer">
                                    <p className="title" ><b>Email: </b> JohnDoe@gmail.com</p>
                                </Container>
                                <Container className="informationContainer">
                                    <p className="title" ><b>Telefono: </b> 1150497372</p>
                                </Container>
                                <Container className="informationContainer">
                                    <p  className="title" ><b>Método de pago: </b>
                                        <img
                                            alt="tarjeta"
                                            src={"https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Symbol.jpg"}
                                            width="100"
                                            height="50"
                                            style={{borderRadius:5, marginLeft:10, marginRight:10, position: "relative"}}
                                        />
                                        **** **** **** 1234 
                                    </p>
                                    
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
    );
}

export default account;