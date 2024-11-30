import React from "react";

const vdsServices = [
  {
    id: 1,
    name: "VDS High Performance",
    description: "Выделенный сервер с высокой производительностью и SSD-дисками.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
  {
    id: 2,
    name: "VDS Standard",
    description: "Надежный сервер для базовых нужд с отличной скоростью.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
];

const VDSComponent = () => {
  return (
    <div className="vds-container">
      <h2 className="header-title">Ваши услуги VDS</h2>
      {vdsServices.map((service) => (
        <div key={service.id} className="vds-item">
          <img src={service.img} alt={service.name} />
          <div className="vds-item-details">
            <div className="vds-item-name">{service.name}</div>
            <div className="vds-item-description">{service.description}</div>
            <div className="vds-item-status">{service.status}</div>
          </div>
          <div className="vds-item-actions">
            <button className="vds-item-action-btn">Управлять</button>
            <button className="vds-item-action-btn">Продлить</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VDSComponent;
