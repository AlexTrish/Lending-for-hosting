import React from 'react';
import { Container, Button, Table, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { BsPlus, BsSearch } from 'react-icons/bs';
import '../PersonalPage.scss';

function PayersPage() {
  return (
    <Container className="mt-4 payers-page">
      {/* Заголовок */}
      <Row className="mb-3">
        <Col>
          <h2 className="header">Плательщики</h2>
        </Col>
      </Row>

      {/* Панель действий */}
      <Row className="mb-3">
        <Col xs="auto">
          <Button className="action-btn me-2">
            <BsPlus /> Создать
          </Button>
          <Button className="action-btn-secondary me-2">Изменить</Button>
          <Button className="action-btn-danger">Удалить</Button>
        </Col>
      </Row>

      {/* Поле поиска */}
      <Row className="mb-4">
        <Col>
          <InputGroup>
            <InputGroup.Text className="search-icon"><BsSearch /></InputGroup.Text>
            <FormControl placeholder="Поиск CTRL+SHIFT+F" className="search-input" />
          </InputGroup>
        </Col>
      </Row>

      {/* Таблица с плательщиками */}
      <Table striped bordered hover responsive className="payers-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Id</th>
            <th>Наименование</th>
            <th>Статус плательщика</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="text-center py-5 empty-state">
              <div className="empty-state-content">
                <div className="empty-icon" style={{ background: 'var(--svg-center-info-block)' }}></div>
                <p className="empty-text">Список пуст</p>
                <p className="empty-subtext">У вас пока не создано ни одной записи</p>
                <Button className="create-btn">Создать</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default PayersPage;