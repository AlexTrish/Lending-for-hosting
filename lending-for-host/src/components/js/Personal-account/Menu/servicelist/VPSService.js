import React from "react";

const vpsServices = [
  {
    id: 1,
    name: "VPS Ultimate",
    description: "Серверы высокой мощности для профессиональных решений.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
  {
    id: 2,
    name: "VPS Starter",
    description: "Базовый сервер для запуска небольших проектов.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
];

const VPSComponent = () => {
  return (
    <div className="vps-container">
      <h2 className="header-title">Ваши услуги VPS</h2>
      {vpsServices.map((service) => (
        <div key={service.id} className="vps-item">
          <img src={service.img} alt={service.name} />
          <div className="vps-item-details">
            <div className="vps-item-name">{service.name}</div>
            <div className="vps-item-description">{service.description}</div>
            <div className="vps-item-status">{service.status}</div>
          </div>
          <div className="vps-item-actions">
            <button className="vps-item-action-btn">Управлять</button>
            <button className="vps-item-action-btn">Продлить</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VPSComponent;
