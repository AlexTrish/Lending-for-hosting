import React from "react";

const cloudServices = [
  {
    id: 1,
    name: "Cloud Control",
    description: "Управляйте всеми облачными ресурсами из единого интерфейса.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
  {
    id: 2,
    name: "Cloud Manager",
    description: "Универсальное решение для облачной автоматизации.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
];

const CloudPanel = () => {
  return (
    <div className="cloud-container">
      <h2 className="header-title">Ваши услуги Cloud-Panel</h2>
      {cloudServices.map((service) => (
        <div key={service.id} className="cloud-item">
          <img src={service.img} alt={service.name} />
          <div className="cloud-item-details">
            <div className="cloud-item-name">{service.name}</div>
            <div className="cloud-item-description">{service.description}</div>
            <div className="cloud-item-status">{service.status}</div>
          </div>
          <div className="cloud-item-actions">
            <button className="cloud-item-action-btn">Управлять</button>
            <button className="cloud-item-action-btn">Продлить</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CloudPanel;