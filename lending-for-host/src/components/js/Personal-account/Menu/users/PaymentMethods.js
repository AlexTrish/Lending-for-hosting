import React, { useState } from "react";
import { Modal } from 'react-bootstrap';

// Моковые данные для карточек
const paymentMethods = [
  { id: 1, type: "Visa", last4: "1234", expDate: "12/24" },
  { id: 2, type: "MasterCard", last4: "5678", expDate: "11/23" },
  { id: 3, type: "American Express", last4: "9876", expDate: "01/25" },
];

const PaymentMethods = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCardSubmit = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className="payment-methods-container">
      <h2 className='header-title'>Ваши способы оплаты</h2>
      <div className="payment-slider">
        {paymentMethods.map((method) => (
          <div key={method.id} className="payment-card">
            <div className="card-header">
              <span>{method.type}</span>
              <span>•••• {method.last4}</span>
            </div>
            <div className="card-body">
              <p>Срок действия: {method.expDate}</p>
            </div>
            <div className="card-footer">
              <button className="edit-btn">Изменить</button>
            </div>
          </div>
        ))}
      </div>

      <button className="add-card-btn" onClick={handleShow}>
        Добавить способ оплаты
      </button>

      {/* Модальное окно */}
      <Modal show={show} onHide={handleClose}>
        {/* Credit-Card */}
        <div className="credit-card-container">

        </div>
        {/* Form for credit-card */}
        <form className="form-container">
          <div className="form-group-one">
              {/* FullName */}
            <label htmlFor="cardType">ФИО</label>
            <input type="text" name="Fullname" id="Fullname" />
              {/* Card Number */}
            <label htmlFor="cardNumber">Номер карты</label>
            <input type="text" name="cardNumber" id="cardNumber" />
          </div>
          <div className="form-group-two">
            <label htmlFor="expDate">Срок действия</label>
            <div className="exp-date">
              <input type="number" name="expDate-mm" id="expDate-mm" />
              <input type="number" name="expDate-yy" id="expDate-yy" />
            </div>

            <label htmlFor="cvv">CVC/CVV code</label>
            <input type="number" name="cvv" id="cvv" />
          </div>
          <button className="cancel-card-btn" onClick={handleClose}>Отмена</button>
          <button className="add-card-btn" onClick={handleCardSubmit}>Добавить</button>
        </form>
      </Modal>
    </div>
  );
};

export default PaymentMethods;
