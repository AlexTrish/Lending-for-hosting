import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Статистика авторизаций
  const [timePeriod, setTimePeriod] = useState('day');
  const [logins, setLogins] = useState([
    { id: "LOGIN-001", date: "2024-11-28 14:30", user: "user1" },
    { id: "LOGIN-002", date: "2024-11-29 10:15", user: "user2" },
    { id: "LOGIN-003", date: "2024-11-27 12:45", user: "user3" },
    { id: "LOGIN-004", date: "2024-11-30 16:00", user: "user1" },
    { id: "LOGIN-005", date: "2024-11-30 17:30", user: "user2" },
  ]);

  const [filteredLogins, setFilteredLogins] = useState(logins);

  // Данные для графика
  const generateGraphData = () => {
    let labels = [];
    let data = [];

    if (timePeriod === "day") {
      labels = ['2024-11-20', '2024-11-21', '2024-11-22', '2024-11-23', '2024-11-24', '2024-11-25', '2024-11-26', '2024-11-27', '2024-11-28'];
      data = [5, 7, 3, 9, 8, 5, 6, 7, 10]; // Количество авторизаций за каждый день
    } else if (timePeriod === "week") {
      labels = ['2024-11-20 - 2024-11-26', '2024-11-27 - 2024-12-03'];
      data = [30, 35]; // Количество авторизаций за каждую неделю
    } else if (timePeriod === "month") {
      labels = ['Ноябрь 2024', 'Декабрь 2024'];
      data = [150, 120]; // Количество авторизаций за месяц
    } else if (timePeriod === "year") {
      labels = ['2024', '2025'];
      data = [1800, 2000]; // Количество авторизаций за год
    }

    return data.map((value, index) => ({
      date: labels[index],
      value,
    }));
  };

  // Обработчик фильтрации авторизаций по пользователю
  const handleFilterChange = (e) => {
    const filter = e.target.value;
    if (filter !== 'Все') {
      setFilteredLogins(logins.filter(login => login.user === filter));
    } else {
      setFilteredLogins(logins);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="title">Статистика авторизаций</h1>

      {/* Фильтры для выбора периода */}
      <div className="filter-container">
        <label htmlFor="time-period">Выберите период:</label>
        <select id="time-period" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
          <option value="day">Дни</option>
          <option value="week">Недели</option>
          <option value="month">Месяцы</option>
          <option value="year">Годы</option>
        </select>
      </div>

      {/* График статистики */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={generateGraphData()}>
            <CartesianGrid stroke="transparent" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4CAF50" dot={true} activeDot={{ fill: "#4CAF50", border: "none" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Фильтр по пользователю */}
      <div className="filter-container">
        <label htmlFor="user-filter">Фильтр по пользователю:</label>
        <select id="user-filter" onChange={handleFilterChange}>
          <option value="Все">Все пользователи</option>
          <option value="user1">Пользователь 1</option>
          <option value="user2">Пользователь 2</option>
          <option value="user3">Пользователь 3</option>
        </select>
      </div>

      {/* Таблица авторизаций */}
      <div className="table-container">
        <h2>История авторизаций</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Пользователь</th>
              <th>Дата и время</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogins.map((login) => (
              <tr key={login.id}>
                <td>{login.id}</td>
                <td>{login.user}</td>
                <td>{login.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
