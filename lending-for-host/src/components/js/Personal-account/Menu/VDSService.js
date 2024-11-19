import React, { useState } from 'react';
import { Modal, Button, Table, Form, Row, Col, InputGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';

const VdsServers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);

  const servers = [
    {
      id: 1,
      name: 'VDS Server 1',
      ip: '192.168.1.1',
      status: 'Active',
      cpu: '2 vCPU',
      ram: '4 GB',
      disk: '50 GB SSD',
      bandwidth: '100 Mbps',
      location: 'New York',
      os: 'Ubuntu 20.04',
      date: '2023-06-15',
    },
    {
      id: 2,
      name: 'VDS Server 2',
      ip: '192.168.1.2',
      status: 'Inactive',
      cpu: '1 vCPU',
      ram: '2 GB',
      disk: '20 GB SSD',
      bandwidth: '50 Mbps',
      location: 'London',
      os: 'CentOS 8',
      date: '2023-07-20',
    },
    {
      id: 3,
      name: 'VDS Server 3',
      ip: '192.168.1.3',
      status: 'Active',
      cpu: '4 vCPU',
      ram: '8 GB',
      disk: '100 GB SSD',
      bandwidth: '200 Mbps',
      location: 'Frankfurt',
      os: 'Debian 11',
      date: '2023-08-10',
    },
  ];

  const handleOpenModal = (server) => {
    setSelectedServer(server);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedServer(null);
  };

  return (
    <div className="container mt-3" style={{ width: '100%' }}>
      <h1 className="mb-3" style={{ fontSize: '1.5vw', fontWeight: '500' }}>VDS Servers</h1>
      
      {/* Таблица с добавленными стилями */}
      <Table striped bordered hover responsive size="sm" style={{ width: '100%', fontSize: '1.2vw', borderRadius: '12px', height: '60vh', overflowY: 'auto' }}>
        <thead style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '12px' }}>
          <tr>
            <th style={{ width: '20%' }}>Name</th>
            <th style={{ width: '15%' }}>IP</th>
            <th style={{ width: '10%' }}>Status</th>
            <th style={{ width: '10%' }}>CPU</th>
            <th style={{ width: '10%' }}>RAM</th>
            <th style={{ width: '10%' }}>Location</th>
            <th style={{ width: '10%' }}>OS</th>
            <th style={{ width: '15%' }}>Actions</th>
          </tr>
        </thead>
        <tbody style={{ height: 'calc(100% - 4rem)', overflowY: 'auto' }}>
          {servers.map((server) => (
            <tr key={server.id} style={{ height: '8%' }}>
              <td>{server.name}</td>
              <td>{server.ip}</td>
              <td>{server.status}</td>
              <td>{server.cpu}</td>
              <td>{server.ram}</td>
              <td>{server.location}</td>
              <td>{server.os}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleOpenModal(server)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
          {/* Пустые строки, если серверов меньше, чем место в таблице */}
          {[...Array(5 - servers.length)].map((_, index) => (
            <tr key={index} style={{ height: '8%' }}>
              <td colSpan="8" className="text-center" style={{ fontSize: '1.2vw' }}></td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Модальное окно */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        animation={true}
        className="custom-modal"
      >
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title style={{ fontSize: '1.5vw' }}>Server Configuration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedServer ? (
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formServerName">
                    <Form.Label style={{ fontSize: '1vw' }}>Server Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedServer.name}
                      placeholder="Enter server name"
                      style={{ fontSize: '1vw' }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formServerIP">
                    <Form.Label style={{ fontSize: '1vw' }}>IP Address</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedServer.ip}
                      placeholder="Enter IP address"
                      style={{ fontSize: '1vw' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formServerStatus">
                <Form.Label style={{ fontSize: '1vw' }}>Status</Form.Label>
                <ToggleButtonGroup
                  type="radio"
                  name="status"
                  defaultValue={selectedServer.status}
                  className="w-100"
                >
                  <ToggleButton variant="outline-success" value="Active" className="w-33" style={{ fontSize: '1vw' }}>
                    Active
                  </ToggleButton>
                  <ToggleButton variant="outline-danger" value="Inactive" className="w-33" style={{ fontSize: '1vw' }}>
                    Inactive
                  </ToggleButton>
                </ToggleButtonGroup>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formServerCPU">
                    <Form.Label style={{ fontSize: '1vw' }}>CPU</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        defaultValue={selectedServer.cpu.split(' ')[0]}
                        style={{ fontSize: '1vw' }}
                      />
                      <InputGroup.Text style={{ fontSize: '1vw' }}>vCPU</InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formServerRAM">
                    <Form.Label style={{ fontSize: '1vw' }}>RAM</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        defaultValue={selectedServer.ram.split(' ')[0]}
                        style={{ fontSize: '1vw' }}
                      />
                      <InputGroup.Text style={{ fontSize: '1vw' }}>GB</InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formServerDisk">
                    <Form.Label style={{ fontSize: '1vw' }}>Disk</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        defaultValue={selectedServer.disk.split(' ')[0]}
                        style={{ fontSize: '1vw' }}
                      />
                      <InputGroup.Text style={{ fontSize: '1vw' }}>GB SSD</InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formServerBandwidth">
                    <Form.Label style={{ fontSize: '1vw' }}>Bandwidth</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedServer.bandwidth}
                      placeholder="Enter bandwidth"
                      style={{ fontSize: '1vw' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formServerLocation">
                    <Form.Label style={{ fontSize: '1vw' }}>Location</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedServer.location}
                      placeholder="Enter server location"
                      style={{ fontSize: '1vw' }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formServerOS">
                    <Form.Label style={{ fontSize: '1vw' }}>OS</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={selectedServer.os}
                      placeholder="Enter OS"
                      style={{ fontSize: '1vw' }}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          ) : null}
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button variant="secondary" onClick={handleCloseModal} style={{ fontSize: '1vw' }}>Close</Button>
          <Button variant="primary" style={{ fontSize: '1vw' }}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VdsServers;
