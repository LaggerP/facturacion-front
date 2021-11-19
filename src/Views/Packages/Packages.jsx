import React, {useState, useEffect} from "react";
import './Packages.scss';
import {Container, Col, Row, Button, Card, Modal, Spinner} from "react-bootstrap";
import {HandThumbsUp} from 'react-bootstrap-icons';
import Slider from "react-slick";
import InfoModal from "./Modal/InfoModal";
import SuccessModal from "./Modal/SuccessModal";
import FailureModal from "./Modal/FailureModal";
import {useCookies} from "react-cookie";
import {apiUrl, subsKey} from "../../Helper";
import Home from "../../Assets/home.png";

function Packages() {

    const [modalInfoShow, setModalInfoShow] = useState(false);
    const [ModalConfirmShow, setModalConfirmShow] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalFailure, setModalFailure] = useState(false);
    const [dataModal, setDataModal] = useState();
    const [dataConfirm, setDataConfirm] = useState();
    const [paquetes, setPaquetes] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie] = useCookies(['cookie-name']);

    const getPaquetes = async () => {
        let request = await fetch('https://suscripciones-backend.herokuapp.com/api/packages/v1/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Key': subsKey
            }
        });
        let response = await request.json();
        setIsLoading(false);
        setPaquetes(response.data);
    }

    const hirePackage = async (packageName, packageIdNumber, packageCost, packageImage) => {
        let request = await fetch(`${apiUrl}/subscriptions/internal/new`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.user.token
            },
            body: JSON.stringify({
                userId: cookies.user.userData.id,
                name: packageName,
                subscriptionId: cookies.user.userData.subscriptionId,
                packageId: packageIdNumber,
                cost: packageCost,
                email: cookies.user.userData.email,
                uriImg: packageImage || 'https://grupoact.com.ar/wp-content/uploads/2020/04/placeholder.png',

            })
        });
        if (request.status === 201) {
            setModalSuccess(true);
            userValidate();
            // cookies.user.packages.push(await request.json().sub);
        } else {
            setModalFailure(true)
        }
    }

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

    useEffect(async () => {
        await userValidate();
        await getPaquetes();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (paquetes) {
        return (
          <div className="packages">
                    <nav aria-label="breadcrumb">
                 <Container className="pt-4">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"> <a href="/">
                       <img
                        alt=""
                        src={Home}/></a></li>
                        <li class="breadcrumb-item"><a href="javascript:history.back()">Suscripciones</a></li>
                        <li class="breadcrumb-item active" style={{color: "#C78C36"}} aria-current="page">Paquetes</li>
                    </ol>
                 </Container>
        </nav>
              {isLoading ?
                (
                 <div style={{marginTop: 250}} >
                  <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  </div>)
                :
                (
                  <Container>
                      <Row>
                          <p className='packagesTitle'>Paquetes</p>
                      </Row>
                      <Row>
                          <Slider {...settings}>
                              {
                                  paquetes.map((sub, key) => {
                                      if (sub.estado.toLowerCase() === "activo") {
                                        const imageCondition = (sub.imagen == '' || sub.imagen == 'null' || sub.imagen == null || sub.imagen == 'link' || sub.imagen == 'url')
                                          return (
                                            <Col key={key} style={{paddingTop: 30}}>
                                                <Card bsPrefix="packageCard">
                                                    <Card.Img variant='top' className='cardImages'
                                                              src={imageCondition ? 'https://grupoact.com.ar/wp-content/uploads/2020/04/placeholder.png' : sub.imagen}/>
                                                    <Card.Body>
                                                        <Card.Title className="cardTitle">{sub.nombre}</Card.Title>
                                                        <Card.Text className="cardText">${sub.precio} /mes</Card.Text> 
                                                        {cookies.user.packages.some(item => item.packageId === sub.id_paquete && item.subscribed===true) 
                                                        ? 
                                                            <Button type="primary" bsPrefix="buttonPackagesHired" disabled>Contratado</Button> 
                                                        : 
                                                            <Button type="primary" bsPrefix="buttonPackages"
                                                                    onClick={() => {
                                                                        setModalConfirmShow(true);
                                                                    
                                                                        setDataConfirm({
                                                                            packageName: sub.nombre,
                                                                            packageIdNumber: sub.id_paquete,
                                                                            packageCost: sub.precio,
                                                                            packageImage: sub.imagen
                                                                        })
                                                                    }}
                                                                    >Contratar</Button>
                                                        }
                                                    </Card.Body>
                                                    <Card.Footer bsPrefix="cardFooter" onClick={() => {
                                                        setModalInfoShow(true);
                                                        setDataModal({
                                                            name: sub.nombre,
                                                            description: sub.descripcion,
                                                            price: sub.precio
                                                        });
                                                    }}>Ver más</Card.Footer>
                                                </Card>
                                            </Col>
                                          )
                                      }
                                  })
                              }
                          </Slider>
                      </Row>
                      <Row>
                          <p className='bottomText'>Adquirí tus suscripciones, con estos precios exclusivos</p>
                      </Row>
                  </Container>
                )
              }

              <InfoModal
                data={dataModal}
                show={modalInfoShow}
                onHide={() => setModalInfoShow(false)}
              />

              <Modal
                show={ModalConfirmShow}
                onHide={() => setModalConfirmShow(false)}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                  <Modal.Header closeButton style={{background: '#B65FB2', border: '5px solid #B65FB2'}}/>
                  <Modal.Body>
                      <p style={{textAlign: 'center'}}>
                          <HandThumbsUp style={{
                              width: 75,
                              height: 75,
                              borderRadius: 50,
                              border: '4px solid #000000',
                              textAlign: 'center'
                          }}/>
                      </p>
                      <p style={{color: '#B65FB2', fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>CONTRATAR</p>
                      <p style={{textAlign: 'center', fontSize: 18}}>Estás por contratar un paquete. Por favor confirma
                          la
                          operación</p>
                      <Container style={{display: 'flex', justifyContent: 'center'}}>
                          <Button
                            style={{backgroundColor: '#B65FB2', fontSize: 20, borderColor: '#B65FB2', borderRadius: 10}}
                            onClick={() => {
                                setModalConfirmShow(false);
                                hirePackage(dataConfirm.packageName, dataConfirm.packageIdNumber, dataConfirm.packageCost, dataConfirm.packageImage)
                            }}>Confirmar</Button>
                      </Container>
                  </Modal.Body>
              </Modal>

              <SuccessModal
                show={modalSuccess}
                onHide={() => {
                    setModalSuccess(false)  
                    window.location.reload();
                }}
              />

              <FailureModal
                show={modalFailure}
                onHide={() => setModalFailure(false)}
              />
          </div>
        )
    } else {
        return (
            <div className="packages">
              {isLoading ? (
                <div style={{marginTop: 250}} >
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                )
                :
                (
                <div>
                    <nav aria-label="breadcrumb">
                        <Container className="pt-4">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:history.back()">Home</a></li>
                                <li class="breadcrumb-item"><a href="javascript:history.back()">Suscripciones</a></li>
                                <li class="breadcrumb-item active" style={{color: "#C78C36"}} aria-current="page">Paquetes</li>
                            </ol>
                        </Container>
                    </nav>
                    <h1 style={{marginTop: 250}}>No se encontraron paquetes.</h1>
                    <h1>Intente nuevamente o contactenos.</h1>
                </div>
                )
              }
            </div>
        )
    }

}

export default Packages;
