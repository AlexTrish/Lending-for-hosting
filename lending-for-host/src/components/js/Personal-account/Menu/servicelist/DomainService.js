import React from "react";

const domainServices = [
  {
    id: 1,
    name: "example.com",
    description: "Ваш личный домен.",
    status: "Активен",
  },
  {
    id: 2,
    name: "mywebsite.org",
    description: "Ваш личный домен.",
    status: "Активен",
  },
  {
    id: 3,
    name: "startup.biz",
    description: "Ваш личный домен.",
    status: "Активен",
  },
];

const DomainRental = () => {
  return (
    <div className="domain-container">
      <h2 className="header-title">Арендованные домены</h2>
      {domainServices.map((domain) => (
        <div key={domain.id} className="domain-item">
          <div className="domain-item-header">
            <div className="domain-item-name">{domain.name}</div>
            <div className="domain-item-status">{domain.status}</div>
          </div>
          <div className="domain-item-description">{domain.description}</div>
          <div className="domain-item-actions">
            <button className="domain-item-action-btn">Управлять</button>
            <button className="domain-item-action-btn">Продлить</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DomainRental;
