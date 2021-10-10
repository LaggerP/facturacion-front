import React from "react";

import {Modal} from 'react-bootstrap';

import {Check} from 'react-bootstrap-icons'

const SuccessModal = (props) => {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Header closeButton style={{background: '#8CCF4D', border: '5px solid #8CCF4D'}}/>
          <Modal.Body>
              <p style={{textAlign: 'center'}}>
                  <Check style={{
                      width: 75,
                      height: 75,
                      borderRadius: 50,
                      border: '4px solid #8CCF4D',
                      textAlign: 'center',
                      color: '#8CCF4D'
                  }}/>
              </p>
              <p style={{textAlign: 'center', fontSize: 18}}>¡La operación salio de forma exitosa!</p>
              <p style={{textAlign: 'center', fontSize: 18}}>Se dio de baja correctamente del paquete.</p>
          </Modal.Body>
      </Modal>
    );
}

export default SuccessModal;
