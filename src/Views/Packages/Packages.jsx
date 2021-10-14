import React, {useState, useEffect} from "react";

import './Packages.scss';

import {Container, Col, Row, Button, Card, Modal, Carousel, CarouselItem} from "react-bootstrap";

import {HandThumbsUp} from 'react-bootstrap-icons';

import InfoModal from "./Modal/InfoModal";

import SuccessModal from "./Modal/SuccessModal";
import FailureModal from "./Modal/FailureModal";

function Packages() {

    const [modalInfoShow, setModalInfoShow] = useState(false);
    const [ModalConfirmShow, setModalConfirmShow] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalFailure, setModalFailure] = useState(false);
    const [dataModal, setDataModal] = useState();
    const [paquetes, setPaquetes] = useState();

    const getPaquetes = async () => {
        let request = await fetch('https://suscripciones-backend.herokuapp.com/api/packages/v1/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let response = await request.json();
        setPaquetes(response.data);
    }

    useEffect(async () => {
        await getPaquetes();
    }, []);

    if (paquetes) {
        return (
          <div className="packages">
              <Container>
                  <Row>
                      <p className='packagesTitle'>Paquetes</p>
                  </Row>
                  <Row>
                      {
                          paquetes.map((sub, key) => {
                              if (sub.estado === "Activo") {
                                  return (
                                    <Col key={key} xs={6} xl={3} style={{paddingTop: 30}}>
                                        <Card bsPrefix="packageCard">
                                            <Card.Img variant='top' className='cardImages'
                                                      src={sub.imagen == null ? 'https://grupoact.com.ar/wp-content/uploads/2020/04/placeholder.png' : sub.imagen}/>
                                            <Card.Body>
                                                <Card.Title className="cardTitle">Pack {sub.nombre}</Card.Title>
                                                <Card.Text className="cardText">${sub.precio} /mes</Card.Text>
                                            </Card.Body>
                                            <Card.Footer bsPrefix="cardFooter" onClick={() => {
                                                setModalInfoShow(true);
                                                setDataModal('Pack Futbol')
                                            }}>Ver más</Card.Footer>
                                        </Card>
                                    </Col>
                                  )
                              }
                          })
                      }
                  </Row>
                  <Row>
                      <Carousel fade>
                          <CarouselItem>
                              <Row>
                                  <Col xs={6} xl={3} style={{paddingTop: 30}}>
                                      <Card bsPrefix="packageCard">
                                          <Card.Img variant='top' className='cardImages'
                                                    src='https://estaticos.muyinteresante.es/uploads/images/test/5b1e6f125cafe8f1173c986b/futbol1.jpg'/>
                                          <Card.Body>
                                              <Card.Title className="cardTitle">Pack Fútbol</Card.Title>
                                              <Card.Text className="cardText">$699 /mes</Card.Text>
                                          </Card.Body>
                                          <Card.Footer bsPrefix="cardFooter" onClick={() => {
                                              setModalInfoShow(true);
                                              setDataModal('Pack Futbol')
                                          }}>Ver más</Card.Footer>
                                      </Card>
                                  </Col>

                                  <Col xs={6} xl={3} style={{paddingTop: 30}}>
                                      <Card bsPrefix="packageCard">
                                          <Card.Img variant='top' className='cardImages'
                                                    src='https://scontent.ffdo2-1.fna.fbcdn.net/v/t1.6435-9/89185566_3396362613714370_3099632040157380608_n.png?_nc_cat=1&ccb=1-5&_nc_sid=973b4a&_nc_ohc=WAlUXUS2s9wAX9vV60A&_nc_ht=scontent.ffdo2-1.fna&oh=23d232fdfef0daf82f9c5621ab4db31d&oe=617788E4'/>
                                          <Card.Body>
                                              <Card.Title className="cardTitle">Pack Disney</Card.Title>
                                              <Card.Text className="cardText">$399 /mes</Card.Text>
                                              <Button type="primary" bsPrefix="buttonPackages" onClick={() => {
                                                  setModalConfirmShow(true)
                                              }}>Contratar</Button>
                                          </Card.Body>
                                          <Card.Footer bsPrefix="cardFooter" onClick={() => {
                                              setModalInfoShow(true);
                                              setDataModal('Pack Disney')
                                          }}>Ver más</Card.Footer>
                                      </Card>
                                  </Col>

                                  <Col xs={6} xl={3} style={{paddingTop: 30}}>
                                      <Card bsPrefix="packageCard">
                                          <Card.Img variant='top' className='cardImages'
                                                    src='https://yt3.ggpht.com/ytc/AKedOLQzP5zGkiegXkGD0rTerdxX9xx0prV8cSpOya9Pfg=s900-c-k-c0x00ffffff-no-rj'/>
                                          <Card.Body>
                                              <Card.Title className="cardTitle">Pack Marvel</Card.Title>
                                              <Card.Text className="cardText">$545 /mes</Card.Text>
                                              <Button type="primary" bsPrefix="buttonPackages">Contratar</Button>
                                          </Card.Body>
                                          <Card.Footer bsPrefix="cardFooter" onClick={() => {
                                              setModalInfoShow(true);
                                              setDataModal('Pack Marvel')
                                          }}>Ver más</Card.Footer>
                                      </Card>
                                  </Col>
                                  <Col xs={6} xl={3} style={{paddingTop: 30}}>
                                      <Card bsPrefix="packageCard">
                                          <Card.Img variant='top' className='cardImages'
                                                    src='https://static.nationalgeographicla.com/files/styles/image_3200/public/NGlogo2.png?w=1600&h=977'/>
                                          <Card.Body>
                                              <Card.Title className="cardTitle">Pack NatGeo</Card.Title>
                                              <Card.Text className="cardText">$459 /mes</Card.Text>
                                          </Card.Body>
                                          <Card.Footer bsPrefix="cardFooter" onClick={() => {
                                              setModalInfoShow(true);
                                              setDataModal('Pack NatGeo')
                                          }}>Ver más</Card.Footer>
                                      </Card>
                                  </Col>
                              </Row>


                          </CarouselItem>
                      </Carousel>
                  </Row>
                  <Row>
                      <p className='bottomText'>Adquirí tus suscripciones, con estos precios exclusivos</p>
                  </Row>
              </Container>

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
                                setModalSuccess(true)
                            }}>Confirmar</Button>
                      </Container>
                  </Modal.Body>
              </Modal>

              <SuccessModal
                show={modalSuccess}
                onHide={() => setModalSuccess(false)}
              />

              <FailureModal
                show={modalFailure}
                onHide={() => setModalFailure(false)}
              />
          </div>
        )
    } else {
        return <><h1>Sin paquetes</h1></>
    }

}

export default Packages;
