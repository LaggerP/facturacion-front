import React from "react";

import {Modal} from 'react-bootstrap';

import {Button, Container} from 'react-bootstrap'

import {HandThumbsUp} from 'react-bootstrap-icons';


const ConfirmModal = (props) => {


    return (
      <Modal
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
              <p style={{textAlign: 'center', fontSize: 18}}>Estás por contratar un paquete. Por favor confirma la
                  operación</p>
              <Container style={{display: 'flex', justifyContent: 'center'}}>
                  <Button style={{backgroundColor: '#B65FB2', fontSize: 20, borderColor: '#B65FB2', borderRadius: 10}}
                          onClick={() => {
                              props.modalSuccess(true);
                              props.onHide()
                          }}>Confirmar</Button>
              </Container>
          </Modal.Body>
      </Modal>
    );
}

export default ConfirmModal;
