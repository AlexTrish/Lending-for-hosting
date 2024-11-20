import React, { useState } from 'react';
import { Modal, Button, Card, Form, Row, Col, InputGroup, Container } from 'react-bootstrap';

const AbuseResistantServerCard = ({ server, onEdit }) => (
  <Card style={{ width: '18rem', margin: '1rem' }} className="text-center">
    <Card.Body>
      <Card.Title>{server.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{server.ip}</Card.Subtitle>
      <Card.Text>
        <strong>Status:</strong> {server.status} <br />
        <strong>Location:</strong> {server.location} <br />
        <strong>CPU:</strong> {server.cpu} <br />
        <strong>RAM:</strong> {server.ram} <br />
        <strong>Disk:</strong> {server.disk} <br />
        <strong>Bandwidth:</strong> {server.bandwidth}
      </Card.Text>
      <Button variant="primary" onClick={() => onEdit(server)}>
        Configure
      </Button>
    </Card.Body>
  </Card>
);

const AbuseResistantServerModal = ({ show, onHide, server, onSave }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>Abuse-Resistant Server Configuration</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {server && (
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formServerName">
                <Form.Label>Server Name</Form.Label>
                <Form.Control defaultValue={server.name} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formServerIP">
                <Form.Label>IP Address</Form.Label>
                <Form.Control defaultValue={server.ip} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formServerCPU">
                <Form.Label>CPU</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue={server.cpu.split(' ')[0]} />
                  <InputGroup.Text>vCPU</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formServerRAM">
                <Form.Label>RAM</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue={server.ram.split(' ')[0]} />
                  <InputGroup.Text>GB</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formServerDisk">
                <Form.Label>Disk</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue={server.disk.split(' ')[0]} />
                  <InputGroup.Text>GB</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formServerBandwidth">
                <Form.Label>Bandwidth</Form.Label>
                <Form.Control defaultValue={server.bandwidth} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formServerLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control defaultValue={server.location} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formServerStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select defaultValue={server.status}>
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

const AbuseResistantServersManager = () => {
  const [servers, setServers] = useState([
    {
      id: 1,
      name: 'Abuse-Resistant Server 1',
      ip: '192.168.1.1',
      status: 'Active',
      location: 'Amsterdam',
      cpu: '4 vCPU',
      ram: '8 GB',
      disk: '100 GB SSD',
      bandwidth: '500 Mbps',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);

  const handleEditServer = (server) => {
    setSelectedServer(server);
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    setShowModal(false);
  };

  const handleAddServer = () => {
    const newServerId = servers.length + 1;
    const newServer = {
      id: newServerId,
      name: `Abuse-Resistant Server ${newServerId}`,
      ip: `192.168.1.${newServerId}`,
      status: 'Inactive',
      location: 'Singapore',
      cpu: '2 vCPU',
      ram: '4 GB',
      disk: '50 GB SSD',
      bandwidth: '100 Mbps',
    };
    setServers([...servers, newServer]);
  };

  return (
    <Container className="mt-3">
      <h1 className="text-center mb-4">Abuse-Resistant Servers</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {servers.map((server) => (
          <AbuseResistantServerCard key={server.id} server={server} onEdit={handleEditServer} />
        ))}
      </div>
      <div className="text-center mt-3">
        <Button variant="success" onClick={handleAddServer}>
          Add Server
        </Button>
      </div>
      <AbuseResistantServerModal
        show={showModal}
        onHide={() => setShowModal(false)}
        server={selectedServer}
        onSave={handleSaveChanges}
      />
    </Container>
  );
};

export default AbuseResistantServersManager;