import React from "react";

const vpnServices = [
  {
    id: 1,
    name: "VPN Premium",
    description: "Приватный доступ к сети с высокой скоростью и безопасностью.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
  {
    id: 2,
    name: "VPN Basic",
    description: "Доступный VPN для ежедневного использования.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
];

const VPNServices = () => {
  return (
    <div className="vpn-container">
      <h2 className="header-title">Ваши услуги VPN</h2>
      {vpnServices.map((service) => (
        <div key={service.id} className="vpn-item">
          <img src={service.img} alt={service.name} />
          <div className="vpn-item-details">
            <div className="vpn-item-name">{service.name}</div>
            <div className="vpn-item-description">{service.description}</div>
            <div className="vpn-item-status">{service.status}</div>
          </div>
          <div className="vpn-item-actions">
            <button className="vpn-item-action-btn">Управлять</button>
            <button className="vpn-item-action-btn">Продлить</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VPNServices;
