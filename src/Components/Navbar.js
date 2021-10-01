import React from "react";

import { Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

function navbar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/">
                    <Navbar.Brand >
                        <p className="notflix">NotFlix</p>
                    </Navbar.Brand>
                    <Navbar.Toggle/>    
                </Link>

                <Link to="/account">
                    <Navbar.Brand className="justify-content-end">
                        <img
                            alt="Perfil"
                            src={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"}
                            width="50"
                            height="50"
                            Link Button 
                        /> 
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    );
}

export default navbar;
