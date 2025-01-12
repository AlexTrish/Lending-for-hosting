import React, { useState } from "react";

// Моковые данные для карточек
const paymentMethods = [
  { id: 1, type: "Visa", last4: "1234", expDate: "12/24" },
  { id: 2, type: "MasterCard", last4: "5678", expDate: "11/23" },
  { id: 3, type: "American Express", last4: "9876", expDate: "01/25" },
];

const PaymentMethods = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newCard, setNewCard] = useState({
    cardType: "",
    cardNumber: "",
    expDate: "",
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    console.log(newCard);
    setModalOpen(false);
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

      <button className="add-card-btn" onClick={openModal}>
        Добавить способ оплаты
      </button>

      {/* Модальное окно */}
      <div
        className={`modal-overlay ${isModalOpen ? "show" : ""}`}
        onClick={closeModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Credit-Card */}
          <div className="credit-card-container">

          </div>
          {/* Form for credit-card */}
          <form className="form-container">
            <div className="form-group">
              <label htmlFor="cardType">ФИО</label>
              <input type="text" name="Fullname" id="Fullname" />
              <label htmlFor="cardNumber">Номер карты</label>
              <input type="text" name="cardNumber" id="cardNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="expDate">Срок действия</label>
              <div className="exp-date">
              <input type="number" name="expDate-mm" id="expDate-mm" />
              <input type="number" name="expDate-yy" id="expDate-yy" />
              </div>

              <label htmlFor="cvv">CVC/CVV code</label>
              <input type="number" name="cvv" id="cvv" />
            </div>
            <button className="cancel-card-btn" onClick={closeModal}>Отмена</button>
            <button className="add-card-btn" onClick={handleCardSubmit}>Добавить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
