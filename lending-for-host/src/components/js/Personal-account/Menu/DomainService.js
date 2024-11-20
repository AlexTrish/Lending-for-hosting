import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, Container } from 'react-bootstrap';

// Компонент для отображения карточки домена
const DomainCard = ({ domain, onExtend }) => (
  <Card style={{ width: '18rem', margin: '1rem' }} className="text-center">
    <Card.Body>
      <Card.Title>{domain.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Expires: {domain.expiryDate}</Card.Subtitle>
      <Card.Text>
        <strong>Status:</strong> {domain.status} <br />
        <strong>Time Remaining:</strong> <strong>{domain.timeRemaining}</strong> <br />
      </Card.Text>
      <Button variant="primary" onClick={() => onExtend(domain)}>
        Extend Lease
      </Button>
    </Card.Body>
  </Card>
);

// Модальное окно для продления аренды
const ExtendLeaseModal = ({ show, onHide, domain, onSave }) => {
  const [extensionPeriod, setExtensionPeriod] = useState(12); // Продление на 12 месяцев по умолчанию

  if (!domain) return null;

  const handleSave = () => {
    onSave(domain.id, extensionPeriod);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Extend Lease for {domain.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Extension Period (months):</label>
          <input
            type="number"
            value={extensionPeriod}
            onChange={(e) => setExtensionPeriod(e.target.value)}
            min="1"
            max="60"
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={handleSave}>Extend</Button>
      </Modal.Footer>
    </Modal>
  );
};

const DomainManager = () => {
  const [domains, setDomains] = useState([
    { id: 1, name: 'example.com', status: 'Active', expiryDate: '2024-12-01', timeRemaining: '', expiryTimestamp: 1699468800000 },
    { id: 2, name: 'mywebsite.net', status: 'Active', expiryDate: '2025-01-15', timeRemaining: '', expiryTimestamp: 1705286400000 },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  // Обновление таймера для всех доменов
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedDomains = domains.map(domain => {
        const remainingTime = domain.expiryTimestamp - Date.now();
        const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

        return {
          ...domain,
          timeRemaining: remainingDays > 0 ? `${remainingDays} days left` : 'Expired',
        };
      });

      setDomains(updatedDomains);
    }, 1000);

    return () => clearInterval(interval);
  }, [domains]);

  const handleExtendLease = (domain) => {
    setSelectedDomain(domain);
    setShowModal(true);
  };

  const handleSaveExtension = (domainId, extensionPeriod) => {
    const updatedDomains = domains.map(domain => {
      if (domain.id === domainId) {
        const newExpiryTimestamp = domain.expiryTimestamp + extensionPeriod * 30 * 24 * 60 * 60 * 1000; // 30 дней в месяц
        return {
          ...domain,
          expiryTimestamp: newExpiryTimestamp,
          expiryDate: new Date(newExpiryTimestamp).toLocaleDateString(),
        };
      }
      return domain;
    });
    setDomains(updatedDomains);
  };

  return (
    <Container className="mt-3">
      <h1 className="text-center mb-4">My Domains</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {domains.map((domain) => (
          <DomainCard key={domain.id} domain={domain} onExtend={handleExtendLease} />
        ))}
      </div>

      <ExtendLeaseModal
        show={showModal}
        onHide={() => setShowModal(false)}
        domain={selectedDomain}
        onSave={handleSaveExtension}
      />
    </Container>
  );
};

export default DomainManager;