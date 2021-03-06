import React, {useContext, useEffect, useState} from "react";
import './Dashboard.scss';
import {Container, Col, Row, Button, Spinner, OverlayTrigger, Tooltip} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {Download} from "react-bootstrap-icons"
import Cards from 'react-credit-cards';
import {useCookies} from 'react-cookie';
import {UserContext} from "../../context/UserContext";
import {token, apiUrl} from "../../Helper";

import Home from "../../Assets/home.png";

function Dashboard() {
    let cantSuscriptions = 0;
    const [isLoading, setIsLoading] = useState(false);
    const {userData, userLogged, setUserData, setUserLogged} = useContext(UserContext);
    const [cookies, setCookie] = useCookies(['cookie-name']);

    const userValidate = async () => {  // function to validate if user is really logged

        let request = await fetch(`${apiUrl}/users/web/${token}`, {
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
            setUserData(response); //set the information of the user.
            setUserLogged(true);
            setCookie('user', response, { path: '/' });
            setCookie('externalClientToken', token, { path: '/' });
        }
    }

    const downloadLastInvoice = async () => {
        if(userData.lastInvoice !== null){
            setIsLoading(true);
            let invoice = await fetch(`${apiUrl}/invoices/pdf/${userData.lastInvoice.userId}/${userData.lastInvoice.id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userData.token
                }
            });
            invoice = await invoice.json();
            const linkSource = `data:application/pdf;base64,${invoice}`;
            const downloadLink = document.createElement("a");
            const fileName = `Factura - #${userData.lastInvoice.invoiceNumber}.pdf`;
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
            setIsLoading(false);
        }
    }

    useEffect(async () => {
        await userValidate();
    }, []);

    if (userData && userLogged) {
        return (
          <div className="dashboard">
                <nav aria-label="breadcrumb">
                <Container className="pt-4">
                    <ol class="breadcrumb">
                   <li class="breadcrumb-item"> <a href="#">
                       <img
                        alt=""
                        src={Home}/></a></li>
                    </ol>
                    </Container>
                </nav>
              <Container>
                  <p className="welcomeTitle">??Hola, <b
                    style={{color: "#C78C36"}}>{userData.userData.firstName} {userData.userData.lastName}</b>! Es bueno
                      tenerte de nuevo</p>
              </Container>
              <Container className="containerDashboard mb-5">
                  <Row>
                      <Col sm={12} md={6} xl={{span: 5, offset: 1}}>
                          <Row>
                              <Container className="containerInside">
                                  <Row>
                                      <p className="text" style={{marginLeft: 16}}>??ltima factura</p>
                                  </Row>
                                  <Row>
                                      <Col>
                                      <OverlayTrigger
                                        key="top"
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-$top`}>
                                            {userData.lastInvoice !== null ? "Descargar la ??ltima factura" : "No hay facturas disponibles"}
                                            </Tooltip>
                                        }
                                        >
                                            <Button type="primary"
                                                    bsPrefix="buttonInvoice"
                                                    disabled={isLoading}
                                                    onClick={() => downloadLastInvoice()}>
                                                {isLoading ?
                                                    (<><Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                    style={{marginRight: "10px"}}
                                                    />Descargando </>): (<><Download style={{marginRight: "10px"}}/>Descargar</>)}
                                            </Button>
                                          </OverlayTrigger>
                                      </Col>

                                      <Col>
                                          <Link to="/invoices">
                                                <OverlayTrigger
                                                key="top"
                                                placement="top"
                                                overlay={
                                                    <Tooltip id={`tooltip-$top`}>
                                                        Ver mis facturas
                                                    </Tooltip>
                                                }
                                                >
                                                    <Button type="primary" bsPrefix="buttonInvoice">+ Ver Facturas</Button>
                                                </OverlayTrigger>
                                          </Link>
                                      </Col>
                                  </Row>
                              </Container>
                          </Row>
                          <Row className="mt-3" style={{paddingBottom: 50}}>
                              <Container className="containerInside">
                                    <Row>
                                        <p className="text" style={{marginLeft: 16}}>M??todo de pago</p>
                                    </Row>
                                        <Col className="card">
                                                    <Cards
                                                        cvc="123"
                                                        expiry="08/2024"
                                                        name={userData.userData.firstName +" "+ userData.userData.lastName}
                                                        number="5200*** *** **7294"
                                                    />
                                                </Col>
                              </Container>
                          </Row>
                      </Col>
                      <Col sm={12} md={5} xl={5} style={{paddingBottom: 50}}>
                          <Container className="containerInside" style={{height: '100%'}}>
                              <Row>
                                  <p className="text" style={{marginLeft: 16}}>Suscripciones activas</p>
                              </Row>
                              <Col xl={{span: 10, offset: 1}} style={{height: '100%'}}>
                                    {
                                        userData.packages.length == 0 ?
                                        (
                                            <Row className="noSubscriptions">
                                                <Col xs={9} lg={10}>
                                                    <p className="subtext" style={{paddingTop:15}}>No posee suscripciones</p>
                                                </Col>
                                            </Row>
                                        ):
                                        (userData.packages.map( function(pack) {
                                            if (pack.subscribed == true) {
                                                const imageCondition = (pack.uriImg == '' || pack.uriImg == 'null' || pack.uriImg == null || pack.uriImg == 'link' || pack.uriImg == 'url')
                                                cantSuscriptions++;
                                                if(cantSuscriptions < 4){
                                                    return (
                                                        <Row className="subscriptionsContainer">
                                                            <Col xs={3} lg={2}>
                                                                <img
                                                                    alt={pack.name}
                                                                    src={imageCondition ? 'https://grupoact.com.ar/wp-content/uploads/2020/04/placeholder.png' : pack.uriImg}
                                                                    width="50"
                                                                    height="50"
                                                                    style={{borderRadius:5}}
                                                                />
                                                            </Col>
                                                            <Col xs={9} lg={10}>
                                                                <p className="subtext" style={{paddingTop:15}}>{pack.name}</p>
                                                            </Col>
                                                        </Row>
                                                    )
                                                }else if(cantSuscriptions == userData.packages.length){
                                                    return (
                                                        <p>+ {userData.packages.length - 3} {(userData.packages.length - 3) == 1 ? "suscripci??n activa" : "suscripciones activas"}</p>
                                                    )
                                                }

                                            }
                                        }))
                                    }

                                  <Row>
                                      <Link to="/subscriptions">
                                        <OverlayTrigger
                                            key="top"
                                            placement="top"
                                            overlay={
                                                <Tooltip id={`tooltip-$top`}>
                                                    Ver mis suscripciones activas
                                                </Tooltip>
                                            }
                                            >
                                                <Button type="primary" className="mt-2" bsPrefix="buttonSubscriptions">Ver mis suscripciones</Button>
                                            </OverlayTrigger>
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
        return (
          <div className="dashboard">
              <Container>
                  <Row style={{paddingTop: 30}}>
                      <Col style={{background: '#ffffff', border: "1px solid #C78C36"}}>
                          <p style={{color: '#D11B1B', fontWeight: 'bold', fontSize: 40, textAlign: 'center'}}>??UPS!</p>
                          <p style={{textAlign: 'center', fontSize: 18}}>Ocurri?? un error interno y no se pudo llevar a
                              cabo la operaci??n</p>
                          <p style={{textAlign: 'center', fontSize: 18}}>Por favor, intenta ingresar nuevamente a la
                              sesi??n.</p>
                      </Col>
                  </Row>
              </Container>
          </div>
        );

    }

}

export default Dashboard;
