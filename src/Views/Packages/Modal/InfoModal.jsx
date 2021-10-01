import React from "react";

import {Modal} from 'react-bootstrap';

const InfoModal = (props) => {

    let description=' ';
    let price = ' ';

    if (props.data==='Pack Futbol'){
        description='Es un paquete Premium que te permite acceder a todos los partidos de la Superliga de fútbol argentino. Con él, podrás acceder a dos nuevos canales: Fox Sports Premium y TNT Sports, con la transmisión exclusiva todos los días de la semana, las 24 hs del día.'
        price='$699 / mes'
    }
    if (props.data==='Pack Disney'){
        description='Descubrí las mejores historias de Disney, disfrutá de películas, series y documentales nunca antes vistos. Desde nuevos lanzamientos hasta clásicos inolvidables.'
        price='$399 / mes'
    }
    if (props.data==='Pack Marvel'){
        description='Descubrí las mejores historias de Marvel, disfrutá de películas, series y documentales nunca antes vistos. Desde nuevos lanzamientos hasta clásicos inolvidables.'
        price='$545 / mes'
    }
    if (props.data==='Pack NatGeo'){
        description='Descubrí las mejores historias de National Geographic, disfrutá de películas, series y documentales nunca antes vistos. Desde nuevos lanzamientos hasta clásicos inolvidables.'
        price='$459 / mes'
    }
    

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
        <Modal.Header closeButton style={{background:'#B65FB2', border:'5px solid #B65FB2'}}/>
      <Modal.Body>
        <p style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>{props.data}</p>
        <p style={{textAlign:'center', fontSize:18}}>{description}</p>
        <p style={{textAlign:'center', fontSize:18}}>A solo:</p>
        <p style={{textAlign:'center', fontSize:23}}>{price}</p>
      </Modal.Body>

        </Modal>
    );
}

export default InfoModal;