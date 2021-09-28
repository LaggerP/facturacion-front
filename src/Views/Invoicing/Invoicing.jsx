import React from "react";
import './Invoicing.scss';
import {Container, Col, Row, Button, Spinner} from "react-bootstrap";
import {useEffect,useCallback} from "react";

function Invoicing() {
    const [invoices, setInvoices] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchTerm,setSearchTerm] = React.useState('')

    const urlInvoice="https://notflix-fya-backend.herokuapp.com/api/invoices/"
    const userID="1";
    
    const fetchMyAPI = useCallback(async () => {
        let response = await fetch(urlInvoice+userID)
        response = await response.json()
        setInvoices(response.reverse())
        setIsLoading(false);
      }, [])
      
      useEffect(() => {
        fetchMyAPI()
      }, [fetchMyAPI])

    return (
        <div className="invoicing">
            { isLoading ? (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>)
          : (
            <Container className="containerInvoicing">
                <Row>
                    <Col sm={12} md={8} xl={10}>
                        <p className="invoicingTitle">Última factura</p>
                    </Col>
                </Row>
                <Row>
                        {
                        invoices.map(function(inv,index,arr){
                            const date = inv.createdAt
                            var strSplitDate = String(date).split(' ');
                            var newdate = new Date(strSplitDate[0]);
                            var dd = newdate.getDate();
                            var mm = newdate.getMonth() + 1; //January is 0!
                            var yyyy = newdate.getFullYear();
                            if (dd < 10) {
                                dd = '0' + dd;
                            }
                            if (mm < 10) {
                                mm = '0' + mm;
                            }
                            newdate =  dd + "-" + mm + "-" + yyyy;
                            newdate.toString();
                            if (0 === index) {
                                return (
                                    <Container className="lastInvoice">
                                    <Row>
                                        <Col sm={12} md={1} lg={8}>
                                            <p className="invoiceInfo">#{inv.invoiceNumber} | {newdate} | {inv.description}...</p>
                                        </Col>
                                        <Col sm={12} md={6} lg={4} style={{display: "flex", justifyContent:"flex-end"}}>
                                            <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                                        </Col>
                                    </Row>
                                    </Container>
                                )
                            }
                        })
                    }
                </Row>
                <Row>
                    <p className="previousInvoices">Facturas anteriores</p>
                </Row>         
                <Col sm={6} className="searchBar">
                    <input 
                        class="form-control"
                        type="text"
                        placeholder="Ingrese aquí el número de factura a buscar"
                        onChange={(event)=> {
                            setSearchTerm(event.target.value);
                        }}   
                    />
                </Col>
                <Row>
                        {
                        invoices.filter((inv,index) => {
                            if(index > 0){
                                if (searchTerm === ""){
                                    return (
                                        <Container className="invoice">
                                        <Row>
                                            <Col sm={12} md={6} lg={8}>
                                                <p className="invoiceInfo">#{inv.invoiceNumber} | date | {inv.description}...</p>
                                            </Col>
                                            <Col sm={12} md={6} lg={4} style={{display: "flex", justifyContent:"flex-end"}}>
                                                <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                                            </Col>
                                        </Row>
                                        </Container>
                                    )
                                } else if (inv.invoiceNumber.toLowerCase().startsWith(searchTerm.toLowerCase())){
                                    return (
                                        <Container className="invoice">
                                        <Row>
                                            <Col sm={12} md={6} lg={8}>
                                                <p className="invoiceInfo">#{inv.invoiceNumber} | date | {inv.description}...</p>
                                            </Col>
                                            <Col sm={12} md={6} lg={4} style={{display: "flex", justifyContent:"flex-end"}}>
                                                <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                                            </Col>
                                        </Row>
                                        </Container>
                                        )
                                } else return false
                            } else return false
                        }).map((inv,index)=>{
                            const date = inv.createdAt
                            var strSplitDate = String(date).split(' ');
                            var newdate = new Date(strSplitDate[0]);
                            var dd = newdate.getDate();
                            var mm = newdate.getMonth() + 1;
                            var yyyy = newdate.getFullYear();
                            if (dd < 10) {
                                dd = '0' + dd;
                            }
                            if (mm < 10) {
                                mm = '0' + mm;
                            }
                            newdate =  dd + "-" + mm + "-" + yyyy;
                            newdate.toString();
                            return (
                                <Container className="invoice">
                                <Row>
                                    <Col sm={12} md={6} lg={8}>
                                        <p className="invoiceInfo">#{inv.invoiceNumber} | {newdate} | {inv.description}...</p>
                                    </Col>
                                    <Col sm={12} md={6} lg={4} style={{display: "flex", justifyContent:"flex-end"}}>
                                        <Button type="primary" bsPrefix="view btnTextColor">Ver factura</Button>
                                    </Col>
                                </Row>
                                </Container>
                            )
                        })
                        }
                </Row>
                <Row>
                    <p className="downText">NOTA: Solo se muestra el último año del historial de facturación.</p>
                </Row>
            </Container>  )  
        }    
        </div>
        
    );
}

export default Invoicing;
