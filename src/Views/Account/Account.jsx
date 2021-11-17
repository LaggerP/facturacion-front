import './Account.scss';
import {Container, Col, Row} from "react-bootstrap";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Home from "../../Assets/home.png";
import {useCookies} from "react-cookie";

function Account() {

    const [cookies] = useCookies(['cookie-name']);

    if ( cookies.user ) {
        return (
            <div className="account">
                <nav aria-label="breadcrumb">
                <Container className="pt-4">
                    <ol class="breadcrumb">
                   <li class="breadcrumb-item"> <a href="javascript:history.back()">
                       <img
                        alt=""
                        src={Home}/></a></li>
                      <li class="breadcrumb-item active" style={{color: "#C78C36"}}   aria-current="page">Cuenta</li>
                    </ol>
                    </Container>
                </nav>
                <Container>
                    <Row>
                        <Col sm={12} md={8} xl={6}>
                            <p className="accountTitle" >Cuenta</p>
                        </Col>
                        <Col sm={12} md={4} xl={6}>
                            <p className="membershipTitle" >MIEMBRO DESDE <b>{cookies.user.userData.createdAt.substring(0,10)}</b></p>
                        </Col>
                    </Row>

                    <Row>
                        <p className="personalDataTitle">Datos Personales</p>
                    </Row>

                    <Row>
                        <Container >
                            <Row className="informationContainer">
                                <Col sm={12} md={6} lg={6}>
                                    <p className="text" ><b>Email: </b>{cookies.user.userData.email} </p>
                                </Col>
                            </Row>
                        </Container>
                    </Row>

                    <Row>
                        <Container className="informationContainer">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <p className="text" ><b>Telefono: </b> {cookies.user.userData.phoneNumber}</p>
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

                                <Col sm={8} md={4} lg={4} className="card">
                                    <Cards
                                        cvc="123"
                                        expiry="08/2024"
                                        name={cookies.user.userData.firstName +" "+ cookies.user.userData.lastName}
                                        number="5200*** *** **7294"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </div>

        );
    } else {
        return  (
            <div className="account">
                <Container>
                <Row style={{paddingTop:30}}>
                        <Col style={{background: '#ffffff',border: "1px solid #C78C36"}}>
                            <p style={{color: '#D11B1B', fontWeight:'bold', fontSize:40, textAlign:'center'}}>¡UPS!</p>
                            <p style={{fontSize:18, textAlign:'center'}}>Ocurrio un error interno y no se pudo llevar a cabo la operación</p>
                            <p style={{fontSize:18, textAlign:'center'}}>Por favor, intenta ingresar nuevamente a la sesión.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Account;
