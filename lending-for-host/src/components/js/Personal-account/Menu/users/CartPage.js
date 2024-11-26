import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import '../../PersonalPage.scss';

function CartPage() {
  // Пример состояния для корзины
  const [cartItems, setCartItems] = useState([
    { name: 'Товар 1', price: 10, quantity: 2 },
    { name: 'Товар 2', price: 15, quantity: 1 },
  ]);

  // Рассчитываем общую стоимость корзины
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container fluid className="py-5" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* Заголовок */}
      <Row className="mb-4">
        <Col>
          <h1 className="display-5" style={{ color: 'var(--h1-text-color)' }}>Корзина</h1>
        </Col>
      </Row>

      {/* Содержимое корзины */}
      {cartItems.length === 0 ? (
        <Row>
          <Col>
            <Card className="text-center" style={{ backgroundColor: 'var(--white-block)' }}>
              <Card.Body>
                <Card.Title style={{ color: 'var(--text-color)' }}>Корзина пуста</Card.Title>
                <Card.Text style={{ color: 'var(--text-color)' }}>
                  Для выбора товаров и услуг перейдите к каталогу.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row>
          {/* Список товаров */}
          <Col md={8}>
            <ListGroup>
              {cartItems.map((item, index) => (
                <ListGroup.Item 
                  key={index} 
                  className="d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: 'var(--content-block)', color: 'var(--text-color)' }}
                >
                  <div>
                    <h5>{item.name}</h5>
                    <p>Цена: ${item.price}</p>
                  </div>
                  <div>
                    <p>Количество: {item.quantity}</p>
                    <p>Всего: ${item.price * item.quantity}</p>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Итоговая стоимость и кнопка для заказа */}
          <Col md={4}>
            <Card style={{ backgroundColor: 'var(--green-block)', color: 'var(--button-text-color)', boxShadow: 'var(--box-shadow)' }}>
              <Card.Body>
                <Card.Title>Подытог</Card.Title>
                <Card.Text>
                  Общая сумма: ${calculateTotal()}
                </Card.Text>
                <Button 
                  variant="primary" 
                  block 
                  style={{
                    backgroundColor: 'var(--icon-buy)',
                    color: 'var(--button-text-color)',
                    border: 'none'
                  }}
                >
                  Заказать
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default CartPage;