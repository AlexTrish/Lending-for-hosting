import React, { useState } from "react";
import { FaCreditCard, FaPlusCircle, FaTrash } from "react-icons/fa";
import '../../PersonalPage.scss';

const PaymentMethodsPage = () => {
  const [cards, setCards] = useState([
    { id: 1, number: "**** **** **** 1234", type: "MasterCard", expDate: "12/24" },
    { id: 2, number: "**** **** **** 5678", type: "Visa", expDate: "08/25" },
  ]);

  const addCard = () => {
    // Функция для добавления новой карты
    // В реальности, здесь будет логика открытия модалки или формы для ввода данных карты
    alert("Открытие формы для добавления карты");
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Способы оплаты</h2>
      
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <div className="card p-4 shadow-sm rounded">
            <div className="d-flex justify-content-between">
              <h5 className="card-title mb-0">Добавить новый способ оплаты</h5>
              <button onClick={addCard} className="btn btn-success">
                <FaPlusCircle className="me-2" />
                Добавить
              </button>
            </div>
            <p className="card-text text-muted">Добавьте свой способ оплаты, чтобы быстро совершать покупки.</p>
          </div>
        </div>
        
        {cards.map((card) => (
          <div key={card.id} className="col-12 col-md-6 mb-4">
            <div className="card p-4 shadow-sm rounded">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">{card.type}</h5>
                  <p className="card-text">{card.number}</p>
                  <p className="card-text text-muted">Срок действия: {card.expDate}</p>
                </div>
                <button onClick={() => deleteCard(card.id)} className="btn btn-danger">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
