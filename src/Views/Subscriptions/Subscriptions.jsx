import React, {useState} from "react";
import './Subscriptions.scss';
import {Container, Col, Row, Button, Spinner, Modal, ModalTitle, ModalBody, ModalFooter} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {useEffect, useCallback} from "react";
import {apiUrl} from "../../Helper";
import SuccessModal from "./Modals/SuccessModal";
import {useCookies} from "react-cookie";
import Home from "../../Assets/home.png";

function Subscriptions() {
    const [subscriptions, setSubscriptions] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [modalCancelSubscriptions, setModalCancelSubscriptions] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [subs, setSubs] = useState(false);
    const [cookies, setCookie] = useCookies(['cookie-name']);
    const [result, setResult] = useState(null);
    const today = new Date();


    const fetchMyAPI = useCallback(async () => { // function to get the subscription of the user
        let response = await fetch(`${apiUrl}/subscriptions/${cookies.user.userData.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.user.token
            }
        });
        response = await response.json()
        setSubscriptions(response.reverse())
        setIsLoading(false);

        let answer = response.every((i) => {
            return i.subscribed === false
        })
        setResult(answer)

    }, [])

    const cambiarEstadoSuscripcion = useCallback(async (userId, subscriptionId, packageId) => {
        let response = await fetch(`${apiUrl}/subscriptions/${userId}/${subscriptionId}/${packageId}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.user.token
            }
        });
        fetchMyAPI();
        userValidate();
        await response.json();
    }, [])

    const userValidate = async () => { 
        let request = await fetch(`${apiUrl}/users/web/${cookies.externalClientToken}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let response = await request.json();
        if (request.status !== 200) {
            console.log("Error")
        } else {
            setCookie('user', response, { path: '/' });
        }
    }

    useEffect(() => {
        userValidate();
        fetchMyAPI();
    }, [fetchMyAPI]);

    return (
      <div className="subscriptions">
          <nav aria-label="breadcrumb">
          <Container className="pt-4">
          <ol class="breadcrumb">
                <li class="breadcrumb-item"> <a href="javascript:history.back()">
                       <img
                        alt=""
                        src={Home}/></a></li>
                <li class="breadcrumb-item active" style={{color: "#C78C36"}}   aria-current="page">Suscripciones</li>
            </ol> 
            </Container>    
        </nav>
          {isLoading ?
            (
              <div style={{marginTop: 250}} >
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )
            : (
              <Container>
                  <Row>
                      <Col sm={12} md={8} xl={10}>
                          <p className="subscriptionsTitle">Suscripciones</p>
                      </Col>
                      <Col sm={12} md={4} xl={2}>
                          <Link to="/packages">
                              <Button type="primary" bsPrefix="button">+ Paquetes</Button>
                          </Link>
                          <p className="clickText">Haga click aqu?? para contratar m??s paquetes</p>
                      </Col>
                  </Row>
                  <Row>
                      <p className="contractedPackages">Paquetes Contratados</p>
                  </Row>
                  <Row>
                      {
                        subscriptions.length == 0 || subscriptions == null || result == true ?
                        (
                            <Container className="package">
                                <Row>
                                    <Col sm={12} md={6} lg={6}>
                                        <p className="packageName">No se encuentra suscripto a ning??n paquete.</p>
                                    </Col>
                                </Row>
                            </Container>
                        ):
                        (subscriptions.map((sub, key) => {
                            if (sub.subscribed === true) {
                                return (
                                <Container className="package" key={key}>
                                    <Row>
                                        <Col sm={12} md={6} lg={6}>
                                            <p className="packageName">{sub.name}</p>
                                        </Col>
                                        <Col sm={12} md={6} lg={6}
                                                style={{display: "flex", justifyContent: "flex-end"}}>
                                            <Button type="primary" bsPrefix="cancel btnTextColor" title={`Cancelar suscripci??n ${sub.name}`} onClick={() => {
                                                setSubs(sub);
                                                setModalCancelSubscriptions(true);
                                            }}> Cancelar Suscripci??n </Button>
                                        </Col>
                                    </Row>
                                </Container>
                                )
                            }
                        }))
                      }
                  </Row>
                  <Row>
                      <p className="contractedPackages">Facturaci??n</p>
                  </Row>
                  <Row>
                        <Container className="package">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <p className="packageName">Tu pr??xima fecha de facturaci??n es el 30/{today.getMonth()+1}/2021</p>
                                </Col>
                            </Row>
                        </Container>
                  </Row>
                  <Row>
                      <p className="downText">Las cuotas de las suscripciones se facturan al principio de cada per??odo y
                          podr??an aparecer en tu cuenta algunos d??as despu??s de la fecha de facturaci??n.</p>
                  </Row>
              </Container>
            )
          }

          <Modal
            show={modalCancelSubscriptions}
            onHide={() => setModalCancelSubscriptions(false)}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

              <Modal.Body style={{border: "2px solid #C78C36"}}>
                  <p style={{textAlign: 'center', fontSize: 20, color: '#C78C36', marginBottom:'30px'}}>CANCELAR SUSCRIPCI??N</p>
                  <p style={{fontSize: 18, textAlign: 'left', marginRight: '15px', marginLeft: '15px'}}>Se proceder?? a
                      realizar la cancelaci??n del paquete <b>{subs.name}</b>.</p>
                  <p style={{fontSize: 18, textAlign: 'left', marginRight: '15px', marginLeft: '15px', marginBottom:'25px'}}>Por favor,
                      presione en el bot??n <b>???Aceptar???</b> para confirmar la operaci??n.</p>
                  <Container style={{display: 'flex', justifyContent: 'center'}}>
                      <Button style={{fontSize: 20, color: '#C78C36', backgroundColor: '#FFF', borderColor: '#C78C36', marginRight:'10px'}}
                              onClick={() => {
                                  setModalCancelSubscriptions(false);
                              }}>Cancelar</Button>
                      <Button style={{fontSize: 20, color: '#FFF', backgroundColor: '#C78C36', borderColor: '#C78C36', marginLeft:'10px'}}
                              onClick={() => {
                                  cambiarEstadoSuscripcion(subs.userId, subs.subscriptionId, subs.packageId);
                                  setModalCancelSubscriptions(false);
                                  setModalSuccess(true);
                              }}>Aceptar</Button>
                  </Container>
              </Modal.Body>
          </Modal>
          <SuccessModal
            show={modalSuccess}
            onHide={() => {
                setModalSuccess(false);
                fetchMyAPI();
            }}
          />
      </div>
    );
}

export default Subscriptions;
