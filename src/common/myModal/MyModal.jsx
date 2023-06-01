import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const MyModal = ({ show, handleClose, title, body, inputValue1, inputValue2, handleInputChange }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="input1">
            <Form.Label>Input 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Value"
              value={inputValue1}
              onChange={(e) => handleInputChange('input1', e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="input2">
            <Form.Label>Input 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Value"
              value={inputValue2}
              onChange={(e) => handleInputChange('input2', e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
