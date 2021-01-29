import React, { useState } from 'react'
import { Table, Button, Form, Col, Modal } from 'react-bootstrap';

import './style.css';

export default function SearchCymbal() {

    const [tableDisplay, setTableDisplay] = useState({ display: "none" }); // Handble state for Table display or not
    const [tbody, setTbody] = useState([]); // Handble state for tbody
    const [show, setShow] = useState(false); // For modal
    const [packageID, setPackageID] = useState();


    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target[0].value.toLowerCase());
        console.log(e.target[1].value.toLowerCase());
        console.log(e.target[2].value);

        // Dummy Cymbals list Data
        const searchresult = [
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0902",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0753",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0901",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0903",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0904",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0905",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0906",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0907",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0908",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0909",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0910",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
            {
                packageCode: "k0800",
                category01: "zildjian",
                category02: "crash",
                size: "16",
                description: "Dark Thin",
                code: "k0911",
                qty: "3",
                eBayPrice: "169",
                websitePrice: "189",
            },
        ]

        console.log(searchresult);
        setTbody([...searchresult]);

        // set Table's display to block 
        setTableDisplay({ display: "block" })
    }

    function handlePakageData(e) {
        console.log(e.target.innerText);
        setPackageID(e.target.innerText);
        setShow(true);
    }

    const handleClose = () => setShow(false);

    return (
        <div className="shadow ml-5 mr-3 mb-4 p-3 bg-white rounded cymbalSearch">
            <Form onSubmit={handleSearch}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control as="select">
                            <option value="all" disabled>Brand</option>
                            <option>All</option>
                            <option>Zildjian</option>
                            <option>Sabian</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control as="select">
                            <option value="all" disabled>Type</option>
                            <option>All</option>
                            <option>Ride</option>
                            <option>HiHats</option>
                            <option>Crash</option>
                            <option>Splash</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control as="select">
                            <option value="all" disabled>Size</option>
                            <option>All</option>
                            <option value="14">14 inch</option>
                            <option value="15">15 inch</option>
                            <option value="16">16 inch</option>
                            <option value="17">17 inch</option>
                            <option value="18">18 inch</option>
                            <option value="19">19 inch</option>
                            <option value="20">20 inch</option>
                            <option value="21">21 inch</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Search
                    </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
            <div style={tableDisplay}>
                {/* TODO: Using state - disaply - none or block */}
                <Table hover className="mt-3">
                    <thead>
                        <tr>
                            <th>Package Code</th>
                            <th>Category01</th>
                            <th>Category02</th>
                            <th>Size</th>
                            <th>Description</th>
                            <th>Code</th>
                            <th>QTY</th>
                            <th>eBay Price</th>
                            <th>Website Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbody.map(cymbal => (<tr key={cymbal.packageCode + "_" + cymbal.code}>
                            <td className="packageCode" data-id={cymbal.packageCode}><Button variant="secondary" size="sm" onClick={handlePakageData}>{cymbal.packageCode.toUpperCase()}</Button></td>
                            <td>{cymbal.category01}</td>
                            <td>{cymbal.category02}</td>
                            <td>{cymbal.size}</td>
                            <td>{cymbal.description}</td>
                            <td>{cymbal.code.toUpperCase()}</td>
                            <td>{cymbal.qty}</td>
                            <td>$ {cymbal.eBayPrice}</td>
                            <td>$ {cymbal.websitePrice}</td>
                        </tr>)
                        )}
                    </tbody>
                </Table>
            </div>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{packageID} | {packageID} | {packageID}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    packageID : {packageID}
                    <Table hover className="mt-3">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Size</th>
                                <th>eBay Price</th>
                                <th>Website Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>K1224</td>
                                <td>K Custom hybrid</td>
                                <td>hi-hats</td>
                                <td>14 inch</td>
                                <td contenteditable='true'>$ 307</td>
                                <td contenteditable='true'>$ 307</td>
                            </tr>
                            <tr>
                                <td>K1224</td>
                                <td>K Custom hybrid</td>
                                <td>hi-hats</td>
                                <td>14 inch</td>
                                <td>$ 307</td>
                                <td>$ 307</td>
                            </tr>
                            <tr>
                                <td>K1224</td>
                                <td>K Custom hybrid</td>
                                <td>hi-hats</td>
                                <td>14 inch</td>
                                <td>$ 307</td>
                                <td>$ 307</td>
                            </tr>
                            <tr>
                                <td>K1224</td>
                                <td>K Custom hybrid</td>
                                <td>hi-hats</td>
                                <td>14 inch</td>
                                <td>$ 307</td>
                                <td>$ 307</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table hover className="mt-5">
                        <thead>
                            <tr>
                                <th>Platform</th>
                                <th>Gross</th>
                                <th>Fee</th>
                                <th>Net</th>
                                <th>Margin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ebay :</td>
                                <td>$ 1095</td>
                                <td contenteditable='true'>12%</td>
                                <td>$ 955.25</td>
                                <td>73.45%</td>
                            </tr>
                            <tr>
                                <td>website :</td>
                                <td>$ 900</td>
                                <td contenteditable='true'>4%</td>
                                <td>$ 955.25</td>
                                <td>55.45%</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Body className="modalCloseButton">
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}
