import React, { useState } from 'react';

// Пример транзакций
const transactions = [
  { id: "PAY-001", action: "Оплата", service: "Домен", date: "2024-11-28 14:30", amount: "500₽" },
  { id: "PAY-002", action: "Возврат", service: "Cloud-Panel", date: "2024-11-29 10:15", amount: "500₽" },
  { id: "PAY-003", action: "Оплата", service: "Cloud-Panel", date: "2024-11-27 12:45", amount: "1500₽" },
  { id: "PAY-004", action: "Отмена", service: "VPN", date: "2024-11-30 16:00", amount: "300₽" },
  { id: "PAY-005", action: "Оплата", service: "VPS", date: "2024-11-30 17:30", amount: "2000₽" },
];

// Возможные фильтры для таблицы
const actionsFilter = ["Все", "Оплата", "Возврат", "Отмена"];

const TransactionHistory = () => {
  const [selectedAction, setSelectedAction] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация транзакций
  const filteredTransactions = transactions.filter((txn) => {
    const matchesAction = selectedAction === "Все" || txn.action === selectedAction;
    const matchesSearch = txn.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAction && matchesSearch;
  });


  return (
    <div className="transaction">
      <div className='content-transaction'>
        {/* Таблица */}
        <div className="container">
          <div className="transaction-history">
            <h1>История транзакций</h1>

            {/* Фильтры */}
            <div className="filter-container">
              <select
                className="filter-select"
                onChange={(e) => setSelectedAction(e.target.value)}
                value={selectedAction}
              >
                {actionsFilter.map((action) => (
                  <option key={action} value={action}>
                    {action}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Поиск по услуге..."
                className="filter-input"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </div>

            {/* Таблица транзакций */}
            <div className="overflow-x-auto">
              <table className="transaction-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Услуга</th>
                    <th>Дата и время</th>
                    <th>Сумма</th>
                    <th>Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((txn) => (
                    <tr key={txn.id}>
                      <td>{txn.id}</td>
                      <td>{txn.service}</td>
                      <td>{txn.date}</td>
                      <td>{txn.amount}</td>
                      <td>
                        <span
                          className={`transaction-tag ${
                            txn.action === "Оплата"
                              ? "tag-payment"
                              : txn.action === "Возврат"
                              ? "tag-refund"
                              : "tag-cancel"
                          }`}
                        >
                          {txn.action}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default TransactionHistory;
