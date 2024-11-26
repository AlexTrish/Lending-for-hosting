import React, { useState } from 'react';
import { Modal, Button, Card, Form, Row, Col, InputGroup, Container } from 'react-bootstrap';

const VPSCard = ({ vps, onEdit }) => (
  <Card style={{ width: '18rem', margin: '1rem' }} className="text-center">
    <Card.Body>
      <Card.Title>{vps.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{vps.ip}</Card.Subtitle>
      <Card.Text>
        <strong>Status:</strong> {vps.status} <br />
        <strong>Location:</strong> {vps.location} <br />
        <strong>CPU:</strong> {vps.cpu} <br />
        <strong>RAM:</strong> {vps.ram} <br />
        <strong>Disk:</strong> {vps.disk}
      </Card.Text>
      <Button variant="primary" onClick={() => onEdit(vps)}>
        Configure
      </Button>
    </Card.Body>
  </Card>
);

const VPSModal = ({ show, onHide, vps, onSave }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>VPS Configuration</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {vps && (
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formVPSName">
                <Form.Label>VPS Name</Form.Label>
                <Form.Control defaultValue={vps.name} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formVPSIP">
                <Form.Label>IP Address</Form.Label>
                <Form.Control defaultValue={vps.ip} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formVPSCPU">
                <Form.Label>CPU</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue={vps.cpu.split(' ')[0]} />
                  <InputGroup.Text>vCPU</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formVPSRAM">
                <Form.Label>RAM</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue={vps.ram.split(' ')[0]} />
                  <InputGroup.Text>GB</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formVPSDisk">
                <Form.Label>Disk</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue={vps.disk.split(' ')[0]} />
                  <InputGroup.Text>GB</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formVPSLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control defaultValue={vps.location} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formVPSStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select defaultValue={vps.status}>
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
      <Button variant="primary" onClick={onSave}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
);

const VPSManager = () => {
  const [vpsList, setVPSList] = useState([
    {
      id: 1,
      name: 'VPS Server 1',
      ip: '192.168.1.1',
      status: 'Active',
      location: 'New York',
      cpu: '2 vCPU',
      ram: '4 GB',
      disk: '50 GB',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVPS, setSelectedVPS] = useState(null);

  const handleEditVPS = (vps) => {
    setSelectedVPS(vps);
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    setShowModal(false);
  };

  const handleAddVPS = () => {
    const newVPSId = vpsList.length + 1;
    const newVPS = {
      id: newVPSId,
      name: `VPS Server ${newVPSId}`,
      ip: `192.168.1.${newVPSId}`,
      status: 'Inactive',
      location: 'London',
      cpu: '1 vCPU',
      ram: '2 GB',
      disk: '20 GB',
    };
    setVPSList([...vpsList, newVPS]);
  };

  return (
    <Container className="mt-3">
      <h1 className="text-center mb-4">VPS Servers</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {vpsList.map((vps) => (
          <VPSCard key={vps.id} vps={vps} onEdit={handleEditVPS} />
        ))}
      </div>
      <div className="text-center mt-3">
        <Button variant="success" onClick={handleAddVPS}>
          Add VPS
        </Button>
      </div>
      <VPSModal
        show={showModal}
        onHide={() => setShowModal(false)}
        vps={selectedVPS}
        onSave={handleSaveChanges}
      />
    </Container>
  );
};

export default VPSManager;