import React, { useState } from 'react';
import { Modal, Button, Card, Form, Row, Col, InputGroup, Container } from 'react-bootstrap';

const VPNCard = ({ vpn, onEdit }) => (
  <Card style={{ width: '18rem', margin: '1rem' }} className="text-center">
    <Card.Body>
      <Card.Title>{vpn.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{vpn.ip}</Card.Subtitle>
      <Card.Text>
        <strong>Status:</strong> {vpn.status} <br />
        <strong>Location:</strong> {vpn.location} <br />
        <strong>Bandwidth:</strong> {vpn.bandwidth} <br />
        <strong>Protocol:</strong> {vpn.protocol}
      </Card.Text>
      <Button variant="primary" onClick={() => onEdit(vpn)}>
        Configure
      </Button>
    </Card.Body>
  </Card>
);

const VPNModal = ({ show, onHide, vpn, onSave }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>VPN Configuration</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {vpn && (
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formVPNName">
                <Form.Label>VPN Name</Form.Label>
                <Form.Control defaultValue={vpn.name} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formVPNIP">
                <Form.Label>IP Address</Form.Label>
                <Form.Control defaultValue={vpn.ip} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formVPNLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control defaultValue={vpn.location} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formVPNProtocol">
                <Form.Label>Protocol</Form.Label>
                <Form.Control defaultValue={vpn.protocol} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formVPNBandwidth">
                <Form.Label>Bandwidth</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue={vpn.bandwidth.split(' ')[0]} />
                  <InputGroup.Text>Mbps</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formVPNStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select defaultValue={vpn.status}>
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

const VPNManager = () => {
  const [vpns, setVPNs] = useState([
    {
      id: 1,
      name: 'VPN Server 1',
      ip: '203.0.113.1',
      status: 'Active',
      location: 'New York',
      bandwidth: '100 Mbps',
      protocol: 'OpenVPN',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVPN, setSelectedVPN] = useState(null);

  const handleEditVPN = (vpn) => {
    setSelectedVPN(vpn);
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    setShowModal(false);
  };

  const handleAddVPN = () => {
    const newVPNId = vpns.length + 1;
    const newVPN = {
      id: newVPNId,
      name: `VPN Server ${newVPNId}`,
      ip: `203.0.113.${newVPNId}`,
      status: 'Inactive',
      location: 'London',
      bandwidth: '50 Mbps',
      protocol: 'IKEv2',
    };
    setVPNs([...vpns, newVPN]);
  };

  return (
    <Container className="mt-3">
      <h1 className="text-center mb-4">VPN Servers</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {vpns.map((vpn) => (
          <VPNCard key={vpn.id} vpn={vpn} onEdit={handleEditVPN} />
        ))}
      </div>
      <div className="text-center mt-3">
        <Button variant="success" onClick={handleAddVPN}>
          Add VPN
        </Button>
      </div>
      <VPNModal
        show={showModal}
        onHide={() => setShowModal(false)}
        vpn={selectedVPN}
        onSave={handleSaveChanges}
      />
    </Container>
  );
};

export default VPNManager;