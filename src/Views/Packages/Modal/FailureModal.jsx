import React from "react";

import {Modal, Container, Button} from 'react-bootstrap';

import {Exclamation} from 'react-bootstrap-icons'

const FailureModal = (props) => {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton style={{background:'#D11B1B', border:'5px solid #D11B1B'}}/>
            <Modal.Body>
                <p style={{textAlign:'center'}}>
                    <Exclamation style={{width:75, height:75, borderRadius:50, border:'4px solid #D11B1B', textAlign:'center', color:'#D11B1B'}}/>
                </p>
                <p style={{color: '#D11B1B', fontWeight:'bold', fontSize:25, textAlign:'center'}}>¡UPS!</p>
                <p style={{textAlign:'center', fontSize:18}}>Ocurrio un error interno y no se pudo llevar a cabo la operación</p>
                <p style={{textAlign:'center', fontSize:18}}>Por favor, intenta nuevamente en unos instantes</p>
            </Modal.Body>
        </Modal>
    );
}

export default FailureModal;