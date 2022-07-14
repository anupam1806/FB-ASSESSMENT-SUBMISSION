import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import "./index.css"

function CardComponent(props) {
    return (
        <Col lg="20">
                <Card className="shadow-lg--hover shadow mt-3 small">
                    <CardBody>
                        <div className="d-flex px-3">
                            <div className="pl-4 middle">
                                {/* <h3>{props.name}</h3> */}
                                <h5>Customer Details</h5>
                                {/* <p className="description mt-3">{props.desc}</p> */}
                                <div className="flexbox">
                                <label className="description mt-3 left">Email</label>
                                <label className="right">anupam.saini18@gmail.com</label>
                                </div>
                                <div className="flexbox">
                                <label className="description mt-3 left">First Name</label>
                                <label className="right">Anupam</label>
                                </div>
                                <div className="flexbox">
                                <label className="description mt-3 left">Last Name</label>
                                <label className="right">Saini</label>
                                </div>
                                
                            </div>
                        </div>
                    </CardBody>
                </Card>
        </Col>
    );
};

export default CardComponent;