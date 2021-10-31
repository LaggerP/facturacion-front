import React from "react";

import {Modal} from 'react-bootstrap';

const InfoModal = (props) => {

  var nombre='';
  var descripcion='';
  var precio='';

  if (props.data != null){
    nombre=props.data.name
    descripcion=props.data.description
    precio=props.data.price
  }

    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header closeButton style={{background: '#B65FB2', border: '5px solid #B65FB2'}}/>
          <Modal.Body>
              <p style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Pack {nombre}</p>
              <p style={{textAlign: 'center', fontSize: 18}}>{descripcion}</p>
              <p style={{textAlign: 'center', fontSize: 18}}>A solo:</p>
              <p style={{textAlign: 'center', fontSize: 23}}>${precio} x mes</p>
          </Modal.Body>
      </Modal>
    );
}

export default InfoModal;
