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
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">Добавить способ оплаты</div>
          <form onSubmit={handleCardSubmit} className="modal-body">
            <span className="fullname-span">Full Name</span>
            <input
              type="text"
              placeholder="Full name"
              className="input-field fullname"
              value={newCard.cardType}
              onChange={(e) =>
                setNewCard({ ...newCard, cardType: e.target.value })
              }
            />
            <span className="cardnumber-span">Card number</span>
            <input
              type="text"
              placeholder="Номер карты"
              className="input-field"
              value={newCard.cardNumber}
              onChange={(e) =>
                setNewCard({ ...newCard, cardNumber: e.target.value })
              }
            />
            <span className="fullname-span">Card expiration</span>
            <input
              type="date"
              placeholder="Срок действия"
              className="input-field сardExp"
              value={newCard.expDate}
              onChange={(e) =>
                setNewCard({ ...newCard, expDate: e.target.value })
              }
            />
            <span className="CVV-span">CVV</span>
            <input
              type="text"
              placeholder="CVV"
              className="input-field"
              value={newCard.expDate}
              onChange={(e) =>
                setNewCard({ ...newCard, expDate: e.target.value })
              }
            />
          </form>
          <div className="modal-footer">
            <button className="close-btn" type="submit">
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
