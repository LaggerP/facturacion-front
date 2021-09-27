import React from "react";

import { Navbar, Container} from "react-bootstrap";

function navbar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <p className="notflix">NotFlix</p>
                </Navbar.Brand>
                
                <Navbar.Toggle/>
                
                <Navbar.Brand className="justify-content-end" href='/account'>
                    <img
                        alt="Perfil"
                        src={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"}
                        width="50"
                        height="50"
                        Link Button 
                    /> 
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default navbar;
