import React from "react";

import {Modal, Container, Button} from 'react-bootstrap';

import {Check} from 'react-bootstrap-icons'

const SuccessModal = (props) => {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton style={{background:'#8CCF4D', border:'5px solid #8CCF4D'}}/>
            <Modal.Body>
                <p style={{textAlign:'center'}}>
                    <Check style={{width:75, height:75, borderRadius:50, border:'4px solid #8CCF4D', textAlign:'center', color:'#8CCF4D'}}/>
                </p>
                <p style={{color: '#8CCF4D', fontWeight:'bold', fontSize:25, textAlign:'center'}}>¡FELICITACIONES!</p>
                <p style={{textAlign:'center', fontSize:18}}>¡El paquete fue contratado con exito!</p>
                <p style={{textAlign:'center', fontSize:18}}>Encontraras los detalles de la operación en la sección de Suscripciones</p>
            </Modal.Body>
        </Modal>
    );
}

export default SuccessModal;