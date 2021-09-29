import React, {useContext} from "react";

import './Account.scss';

import {Container, Col, Row} from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

function account() {
    
    const { userData } = useContext(UserContext);

    return (
        <div className="account">
            <Container>
                <Row>
                    <Col sm={12} md={8} xl={6}>
                        <p className="accountTitle" >Cuenta</p>
                    </Col>
                    <Col sm={12} md={4} xl={6}>
                        <p className="membershipTitle" >MIEMBRO DESDE MARZO 2018</p>
                    </Col>
                </Row>

                <Row>
                    <p className="personalDataTitle">Datos Personales</p>
                </Row>
                
                <Row>
                    <Container className="informationContainer">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="text" ><b>Email: </b> {userData.userData.email}</p>
                            </Col>
                        </Row>
                    </Container>
                </Row>

                <Row>
                    <Container className="informationContainer">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="text" ><b>Telefono: </b> {userData.userData.phoneNumber}</p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="informationContainer">
                        <Row >
                            <Col sm={12} md={4} lg={4}>
                                <p  className="text" ><b>Método de pago: </b></p>
                            </Col>

                            <Col sm={12} md={8}lg={8}>
                            <p className="text" >
                                <img
                                    alt="tarjeta"
                                    src={"https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Symbol.jpg"}
                                    width="100"
                                    height="50"
                                    style={{borderRadius:5, marginTop:10, justifyContent:'flex-start'}}
                                />
                                **** **** **** 1234 
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
        
    );
}

export default account;