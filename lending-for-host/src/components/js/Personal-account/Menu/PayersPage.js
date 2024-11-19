import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaUserPlus, FaTrash, FaEdit } from "react-icons/fa";
import '../PersonalPage.scss';

const PayersPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="payers-page container mt-5">
      {/* Кнопка для открытия модалки */}
      <Button className="mb-3 btn-add-payer" onClick={openModal}>
        <FaUserPlus className="me-2" /> Добавить плательщика
      </Button>

      {/* Таблица */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Сумма</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }).map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Имя {index + 1}</td>
                <td>Фамилия {index + 1}</td>
                <td>{(Math.random() * 1000).toFixed(2)} ₽</td>
                <td>
                  <span
                    className={`badge ${
                      index % 2 === 0 ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {index % 2 === 0 ? "Активен" : "Неактивен"}
                  </span>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">
                    <FaEdit />
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Модалка */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить плательщика</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="payerFirstName" className="form-label">
                Имя
              </label>
              <input
                type="text"
                className="form-control"
                id="payerFirstName"
                placeholder="Введите имя"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="payerLastName" className="form-label">
                Фамилия
              </label>
              <input
                type="text"
                className="form-control"
                id="payerLastName"
                placeholder="Введите фамилию"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="payerAmount" className="form-label">
                Сумма
              </label>
              <input
                type="number"
                className="form-control"
                id="payerAmount"
                placeholder="Введите сумму"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Отмена
          </Button>
          <Button variant="primary">
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PayersPage;