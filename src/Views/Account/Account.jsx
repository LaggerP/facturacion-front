import React, {useContext} from "react";

import './Account.scss';

import {Container, Col, Row} from "react-bootstrap";
import { apiUrl } from "../../Helper";
import { UserContext } from "../../context/UserContext";

function Account() {

    const { userData } = useContext(UserContext);


    if( userData ) {
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
                        <Container >
                            <Row className="informationContainer">
                                <Col sm={12} md={6} lg={6}>
                                    <p className="text" ><b>Email: </b>{userData.userData.email} </p>
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
    } else {
        return  <div className="account">
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

export default Account;