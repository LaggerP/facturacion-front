import React, {useEffect} from "react";

import './Account.scss';

import {Container, Col, Row} from "react-bootstrap";

function Account() {

    const [email, setEmail] = React.useState();
    const [phoneNumber, setPhoneNumber] = React.useState();

    const getData = async () => {
  
    
        return await fetch("https://notflix-fya-backend.herokuapp.com/api/users/1")
        .then((response) => response.json())
        .then((json) => {
            setEmail(json.email);
            setPhoneNumber(json.phoneNumber);
        })
        
    }

    useEffect( async () => {
        await getData();
    }, []);

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
                                <p className="text" ><b>Email: </b>{email} </p>
                            </Col>
                        </Row>
                    </Container>
                </Row>

                <Row>
                    <Container className="informationContainer">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <p className="text" ><b>Telefono: </b> {phoneNumber}</p>
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

export default Account;