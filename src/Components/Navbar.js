import React from "react";

import { Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../Assets/logoNotflix.png"
function navbar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/">
                    <Navbar.Brand className="mb-0">
                        <a class="navbar-brand" href="#">
                            <img
                                    alt=""
                                    src={Logo}
                                    Link Button 
                                /> 
                        </a>
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
