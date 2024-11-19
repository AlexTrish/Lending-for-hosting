import React from "react";
import { FaServer, FaCloud, FaShieldAlt, FaGlobe, FaDatabase } from "react-icons/fa";
import '../PersonalPage.scss';

const PurchasedItemsPage = () => {
  const services = [
    { id: 1, name: "VPN", icon: <FaShieldAlt />, description: "Безопасное интернет-соединение." },
    { id: 2, name: "VDS", icon: <FaServer />, description: "Выделенный виртуальный сервер." },
    { id: 3, name: "VPS", icon: <FaDatabase />, description: "Гибкие виртуальные сервера." },
    { id: 4, name: "Cloud-Panel", icon: <FaCloud />, description: "Управление облачной инфраструктурой." },
    { id: 5, name: "Домены", icon: <FaGlobe />, description: "Управление и покупка доменных имён." },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Мои покупки</h2>
      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-tile">
            <div className="tile-content">
              <div className="icon mb-3">{service.icon}</div>
              <h5 className="tile-title">{service.name}</h5>
              <p className="tile-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasedItemsPage;
