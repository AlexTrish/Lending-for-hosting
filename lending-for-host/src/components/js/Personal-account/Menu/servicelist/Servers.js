import React from "react";

const abuseResistantServers = [
  {
    id: 1,
    name: "Protected Server A",
    description: "Идеально подходит для защиты от DDoS атак. Полная конфиденциальность.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
  {
    id: 2,
    name: "Secure Server B",
    description: "Высокая защита от спама и нежелательного контента.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
  {
    id: 3,
    name: "Safe Server C",
    description: "Лучший выбор для хостинга защищенных приложений.",
    img: "https://via.placeholder.com/100",
    status: "Активен",
  },
];

const AbuseResistantServers = () => {
  return (
    <div className="abuse-resistant-container">
      <h2 className="header-title">Абузоустойчивые серверы</h2>
      {abuseResistantServers.map((server) => (
        <div key={server.id} className="abuse-resistant-item">
          <img src={server.img} alt={server.name} />
          <div className="abuse-resistant-item-details">
            <div className="abuse-resistant-item-name">{server.name}</div>
            <div className="abuse-resistant-item-description">{server.description}</div>
            <div className="abuse-resistant-item-status">{server.status}</div>
          </div>
          <div className="abuse-resistant-item-actions">
            <button className="abuse-resistant-item-action-btn">Управлять</button>
            <button className="abuse-resistant-item-action-btn">Продлить</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AbuseResistantServers;
