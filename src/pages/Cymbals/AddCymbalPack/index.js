import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button, Form, Col } from 'react-bootstrap';

export default function AddCymbalPack() {

  const [show, setShow] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault()
    console.log("handleAdd Func");
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    let answer = window.confirm(`Do you want to add ${e.target[1].value}?`);
    if (answer) {
      // TODO: Add fetch to POST new cymbal

      setShow(false);
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="shadow ml-5 pr-3 pl-3 pb-2 mb-4 bg-white rounded btn" onClick={handleShow}>
        <div className="align-middle">
          <p className="m-0" style={{ fontSize: "18px" }}><i className="bi bi-plus" style={{ fontSize: "24px" }}></i> Add New Packs</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Cymbal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to="/NewPackCSV"><Button>Upload CSV file</Button></Link>
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
            </Form.Row>
            <Form.Group controlId="formNewCymbalDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formPackageCode">
                <Form.Label>Package Code</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formDealerPrice">
                <Form.Label>Dealer Price</Form.Label>
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
