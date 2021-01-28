import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button, Form, Col } from 'react-bootstrap';

export default function Cymbals() {
  useEffect(() => {
    document.title = `Cymbals - IMS - Wavemg`;
  })

  const [show, setShow] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault()
    console.log("handleAdd Func");
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    console.log(e.target[4].value);
    console.log(e.target[5].value);
    let answer = window.confirm(`Do you want to add ${e.target[3].value}?`);
    if (answer) {
      // TODO: Add fetch to POST new cymbal
      
      setShow(false);
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <div className="shadow pr-3 pl-3 pb-2 mb-4 bg-white rounded btn" onClick={handleShow}>
            <div className="align-middle">
              <p className="m-0" style={{ fontSize: "18px" }}><i className="bi bi-plus" style={{ fontSize: "24px" }}></i> Add New Cymbals</p>
            </div>
          </div>
        </div>
      </div>
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
                <Form.Label>Category01</Form.Label>
                <Form.Control as="select" defaultValue="Choose your option">
                  <option>Zildjian</option>
                  <option>Sabian</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formNewCymbalCategory02">
                <Form.Label>Category02</Form.Label>
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
                  <option>14 inch</option>
                  <option>15 inch</option>
                  <option>16 inch</option>
                  <option>17 inch</option>
                  <option>18 inch</option>
                  <option>19 inch</option>
                  <option>20 inch</option>
                  <option>21 inch</option>
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
                <option>K custom</option>
                <option>K custom</option>
              </Form.Control>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formNewCymbalItemCode">
                <Form.Label>Item Code</Form.Label>
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
    </div>
  )
}
