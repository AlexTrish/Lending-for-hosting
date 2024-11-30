import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCloud, FaServer, FaShieldAlt, FaRegWindowMaximize, FaCogs } from 'react-icons/fa';

const services = [
  {
    title: "VPN",
    description: "Приватный доступ к сети для защиты ваших данных и анонимности.",
    icon: <FaShieldAlt />,
  },
  {
    title: "VPS",
    description: "Виртуальные серверы с гарантированными ресурсами для вашего бизнеса.",
    icon: <FaServer />,
  },
  {
    title: "VDS",
    description: "Мощные выделенные серверы для ресурсоёмких приложений.",
    icon: <FaRegWindowMaximize />,
  },
  {
    title: "Cloud-Panel",
    description: "Управление вашими облачными сервисами через интуитивно понятную панель.",
    icon: <FaCloud />,
  },
  {
    title: "Аренда домена",
    description: "Регистрация и аренда доменов для вашего проекта.",
    icon: <FaCogs />,
  },
];

const ServicesCard = () => {
  return (
    <div className="container py-5">
      <h2 className="header-title">Заказать услугу</h2>
      <div className="container-grid">
        {services.map((service, index) => (
          <div key={index} className="col">
            <div className="card">
              <div className="card-body text-center">
                <div className="card-icon mb-3">
                  {service.icon}
                </div>
                <h5 className="card-title">
                  {service.title}
                </h5>
                <p className="card-text">
                  {service.description}
                </p>
                <a href="#" className="btn">
                  Купить
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
