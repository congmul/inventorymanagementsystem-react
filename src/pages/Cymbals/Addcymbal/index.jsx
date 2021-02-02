import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import API from '../../../utils/API'

export default function Addcymbal() {
    
      const [show, setShow] = useState(false);
    
      const handleAdd = (e) => {
        e.preventDefault()
        let newCymbal = {
          category: "",
          type: "",
          size: "",
          description: "",
          packageCode: "",
          sku: "",
          qty: "",
          ebayPrice: "",
          websitePrice: "",
        }
        console.log("handleAdd Func");
        newCymbal["category"] = e.target[0].value;
        newCymbal["type"] = e.target[1].value;
        newCymbal["size"] = e.target[2].value;
        newCymbal["description"] = e.target[3].value;
        newCymbal["packageCode"] = e.target[4].value;
        newCymbal["sku"] = e.target[5].value;
        newCymbal["qty"] = e.target[6].value;
        newCymbal["ebayPrice"] = e.target[7].value;
        newCymbal["websitePrice"] = e.target[8].value;
        newCymbal["product"] = "cymbal";

        console.log(newCymbal);
        let answer = window.confirm(`Do you want to add ${e.target[3].value}?`);
        if (answer) {
          API.postDate("http://localhost:4000/api/product", newCymbal)
          setShow(false);
        }
      }
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
          {/* <div className="row"> */}
            {/* <div className="col-4"> */}
              <div className="shadow ml-5 pr-3 pl-3 pb-2 mb-4 bg-white rounded btn" onClick={handleShow}>
                <div className="align-middle">
                  <p className="m-0" style={{ fontSize: "18px" }}><i className="bi bi-plus" style={{ fontSize: "24px" }}></i> Add New Cymbals</p> 
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Cymbal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Link to="/NewCymbalCSV"><Button>Upload CSV file</Button></Link>
            </Modal.Body>
            <Modal.Body>
              <Form onSubmit={handleAdd}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formNewCymbalCategory01">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" defaultValue="Choose your option">
                      <option>Zildjian</option>
                      <option>Sabian</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formNewCymbalCategory02">
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" defaultValue="Choose your option">
                      <option>Ride</option>
                      <option>HiHats</option>
                      <option>Crash</option>
                      <option>Splash</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formNewCymbalSize">
                    <Form.Label>Size</Form.Label>
                    <Form.Control as="select" defaultValue="Choose your option">
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
                </Form.Row>
                <Form.Group controlId="formNewCymbalDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
                <Form.Group controlId="formNewCymbalGroupCode">
                  <Form.Label>GroupCode</Form.Label>
                  <Form.Control as="select" defaultValue="">
                    <option>K0800</option>
                    <option>KCH390</option>
                    <option>KCD900</option>
                    <option>A20579-11</option>
                    <option>A391</option>
                    <option>KCSP4681</option>
                    <option>K0801C</option>
                    <option>KC0801W</option>
                    <option>AC0801G</option>
                    <option>A0801R</option>
                    <option>S390</option>
                    <option>KS5791</option>
                    <option>15005XEBP</option>
                    <option>XSR5005GB</option>
                    <option>SBR5003G</option>
                    <option>25005XC-PWB</option>
                    <option>15005XCNP</option>
                    <option>15005XTMB</option>
                  </Form.Control>
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formNewCymbalItemCode">
                    <Form.Label>SKU</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formNewCymbalQty">
                    <Form.Label>QTY</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formNewCymbalEbayPrice">
                    <Form.Label>eBay Price</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formNewCymbalWebsitePrice">
                    <Form.Label>Website Price</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
    
                <Modal.Footer>
                  <Button variant="primary" type="submit">
                    Add
                </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
    
              </Form>
    
            </Modal.Body>
    
          </Modal>
        </>
      )
}
