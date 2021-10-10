import React, {useContext, useState} from "react";
import './Subscriptions.scss';
import {Container, Col, Row, Button, Spinner, Modal} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {useEffect,useCallback} from "react";
import {apiUrl} from "../../Helper";
import {UserContext} from "../../context/UserContext";
import SuccessModal from "./Modals/SuccessModal";

function Subscriptions() {
    const [subscriptions, setSubscriptions] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [modalCancelSubscriptions, setModalCancelSubscriptions] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [subs, setSubs] = useState(false);

    const {userData} = useContext(UserContext);

    const fetchMyAPI = useCallback(async () => { // function to get the suscription of the user
        let response = await fetch(`${apiUrl}/subscriptions/${userData.userData.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userData.token
            }
        });
        response = await response.json()
        setSubscriptions(response.reverse())
        setIsLoading(false);
      }, [])
      
    const cambiarEstadoSuscripcion = useCallback(async (userId,subscriptionId, packageId) => {
        let response = await fetch(`${apiUrl}/subscriptions/${userId}/${subscriptionId}/${packageId}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userData.token
            }
        });
        response = await response.json();
    }, [])
      
    useEffect(() => {
        fetchMyAPI()
    }, [fetchMyAPI]);

    return (
        <div className="subscriptions">
            { isLoading ? 
                (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
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
                            <p className="clickText">Haga click aqui para contratar más paquetes</p>
                        </Col>
                    </Row>
                    <Row>
                        <p className="contractedPackages">Paquetes Contratados</p>
                    </Row>
                    <Row>
                        {
                            subscriptions.map(function(sub){
                                if(sub.subscribed == true){
                                    return (
                                        <Container className="package">
                                        <Row>
                                            <Col sm={12} md={6} lg={6}>
                                                <p className="packageName">{sub.name}</p>
                                            </Col>
                                            <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                                <Button type="primary" bsPrefix="cancel btnTextColor" onClick={() => {setSubs(sub); setModalCancelSubscriptions(true);}}> Cancelar Suscripción </Button>
                                            </Col>
                                        </Row>
                                        </Container>
                                    )
                                } 
                            })
                        }
                    </Row>
                    <Row>
                        <p className="contractedPackages">Facturación</p>
                    </Row>
                    <Row>
                        <Container className="package">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <p className="packageName">Tu próxima fecha de facturación es el 30/09/2021</p>
                                </Col>
                                <Col sm={12} md={6} lg={6} style={{display: "flex", justifyContent:"flex-end"}}>
                                    <Button type="primary" bsPrefix="cancel btnTextColor">Cambiar día de facturación</Button>
                                </Col>
                            
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <p className="downText">Las cuotas de las suscripciones se facturan al principio de cada período y podrían aparecer en tu cuenta algunos días después de la fecha de facturación.</p>
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

                <Modal.Body style={{ border: "1px solid #C78C36"}}>
                    <p style={{textAlign:'center', fontSize:20, color:'#C78C36'}}>CANCELAR SUSCRIPCIÓN</p>
                    <br></br>
                    <p style={{textAlign:'center', fontSize:18,textAlign:'left', marginRight:'15px', marginLeft:'15px'}}>Se procederá a realizar la cancelación de la suscripcion del paquete seleccionado.</p>
                    <br></br>
                    <p style={{textAlign:'center', fontSize:18, textAlign:'left', marginRight:'15px', marginLeft:'15px'}}>Por favor, presione en el boton “Aceptar” para confirmar la operación.</p>
                    <Container style={{display:'flex', justifyContent:'center'}}>
                        <Button style={{fontSize:20, color:'#C78C36', backgroundColor: '#FFF', borderColor: '#FFF', }} onClick={() =>{ setModalCancelSubscriptions(false); }}>Cancelar</Button>
                        <Button style={{fontSize:20, color:'#C78C36', backgroundColor: '#FFF', borderColor: '#FFF'}} onClick={() => { cambiarEstadoSuscripcion(subs.userId, subs.subscriptionId, subs.packageId); setModalCancelSubscriptions(false); setModalSuccess(true); fetchMyAPI(); }}>Aceptar</Button>
                    </Container>
                </Modal.Body>
            </Modal>

            <SuccessModal
                show={modalSuccess}
                onHide={() => setModalSuccess(false)}
            />
        </div>
    );
}

export default Subscriptions;