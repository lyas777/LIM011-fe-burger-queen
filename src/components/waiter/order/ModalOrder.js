import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ItemModalOrder from './ItemModalOrder';


const ModalOrder = ({show, handleClose, totalPay, orderProduct, clickSaveOrderFirestore, client, handleChangeClient, table, handleChangeTable}) => {

  return (
    <Modal
      show={show} onHide={handleClose}
      scrollable
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registro de orden
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label column sm={2}>
              Cliente:
            </Form.Label>
            <Col sm={10}>
              <Form.Control placeholder="Nombre y apellido" value = {client} onChange={handleChangeClient}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label column sm={2}>Mesa:</Form.Label>
            <Col sm={10}>
              <Form.Control as="select" size="1" custom value = {table} onChange={handleChangeTable}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio c/u</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {
              orderProduct.map((order, index) => <ItemModalOrder key={index} value={order}/>)
            }
            <tr>
              <td colSpan="2"></td>
              <td>Total</td>
              <td>S/. {totalPay}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClose()}>Regresar</Button>
        <Button onClick={() => clickSaveOrderFirestore()}>Registrar</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ModalOrder;
