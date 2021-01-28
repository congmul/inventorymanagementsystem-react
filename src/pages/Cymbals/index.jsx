import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap';

function MyModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default function Cymbals() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <div className="shadow pr-3 pl-3 pb-2 mb-4 bg-white rounded btn" id="myModal" data-toggle="modal" data-target="#exampleModal">
                        <div className="align-middle">
                            <p className="m-0" style={{ fontSize: "18px" }}><i className="bi bi-plus" style={{ fontSize: "24px" }}></i> Add New Cymbals</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myInput">
            </div>
            <MyModal />
        </div>
    )
}
