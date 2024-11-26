import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import '../../PersonalPage.scss';

function Referral() {
  const referralLink = 'https://example.com/referral?code=YOUR_CODE';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Реферальная ссылка скопирована!');
  };

  return (
    <Container fluid className="py-5">
      {/* Заголовок */}
      <Row className="mb-4">
        <Col>
          <h1 className="display-5">Реферальная программа</h1>
        </Col>
      </Row>

      {/* Информационная панель */}
      <Row className="mb-4">
        <Col md={6} lg={3} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Доход</Card.Title>
              <Card.Text className="display-4">$1234</Card.Text>
              <Button variant="info">Посмотреть детали</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Статистика</Card.Title>
              <Card.Text className="display-4">542</Card.Text>
              <Button variant="info">Посмотреть статистику</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Реферальная ссылка */}
      <Row className="mb-4">
        <Col md={8} lg={6}>
          <h5>Ваша реферальная ссылка</h5>
          <InputGroup>
            <FormControl
              readOnly
              value={referralLink}
              aria-label="Реферальная ссылка"
            />
            <Button variant="outline-secondary" onClick={copyToClipboard}>
              Скопировать
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Referral;