import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import '../../PersonalPage.scss';

const PayersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
  ]);

  const [newPayer, setNewPayer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleAddPayer = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewPayer({ name: "", email: "", phone: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayer({ ...newPayer, [name]: value });
  };

  const handleInvite = () => {
    if (newPayer.name && newPayer.email && newPayer.phone) {
      setData([...data, { ...newPayer, id: data.length + 1, status: "Ожидание" }]);
      handleCloseModal();
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="payers-page">
      <div className="container">
        <h2>Доверенные плательщики</h2>
        <button className="add-button" onClick={handleAddPayer}>
          Добавить плательщика
        </button>

        <div className="table">
          <div className="table-header">
            <span>Номер (id)</span>
            <span>ФИО</span>
            <span>Электронная почта</span>
            <span>Телефон</span>
            <span>Статус</span>
            <span>Действия</span>
          </div>
          <div className="table-body">
            {data.map((row) => (
              <div className="table-row" key={row.id}>
                <span>{row.id}</span>
                <span>{row.name}</span>
                <span>{row.email}</span>
                <span>{row.phone}</span>
                <span>{row.status}</span>
                <div className="actions">
                  <button className="edit-button">
                    <FaEdit />
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(row.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Добавить плательщика</h3>
              <input
                type="text"
                name="name"
                placeholder="Введите ФИО"
                value={newPayer.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Введите электронную почту"
                value={newPayer.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Введите номер телефона"
                value={newPayer.phone}
                onChange={handleInputChange}
              />
              <div className="modal-footer">
                <button className="modal-button" onClick={handleCloseModal}>
                  Отмена
                </button>
                <button className="modal-button" onClick={handleInvite}>
                  Пригласить
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayersPage;
