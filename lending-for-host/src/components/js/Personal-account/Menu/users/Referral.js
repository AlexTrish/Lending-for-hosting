import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ReferralCard = () => {
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);
  const [timePeriod, setTimePeriod] = useState("day");
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [highlightedPoint, setHighlightedPoint] = useState(null);

  const [loading, setLoading] = useState(false); // Управление загрузкой
  const [error, setError] = useState(null); // Управление ошибками
  const [userId, setUserId] = useState(null); // ID пользователя
  const [referralLink, setReferralLink] = useState(''); // Реферальная ссылка

  const fetchUserId = async () => {
    setLoading(true);
    setError(null);
  
    // Получаем данные из sessionStorage
    const sessionToken = sessionStorage.getItem('user'); // Пример ключа, поменяйте на ваш
    const sessionUserLogin = sessionStorage.getItem('login');
    const sessionUserPassword = sessionStorage.getItem('password');
    const sessionUserId = sessionStorage.getItem('userID');
  
    const token = JSON.parse(sessionToken);
    const userLogin = JSON.parse(sessionUserLogin);
    const userPassword = JSON.parse(sessionUserPassword);
    const userId = JSON.parse(sessionUserId);
  
    console.log('Token:', token);
    console.log('Login:', userLogin);
    console.log('Password:', userPassword);
    console.log('UserID:', userId);
  
    if (!token || !userLogin || !userPassword) { // Здесь заменяем sessionToken на token
      console.error('Не найдены данные в sessionStorage');
      setError('Не найдены данные в хранилище сессии');
      setLoading(false);
      return;
    }
  
    try {
      setUserId(userId);
      setReferralLink(`referer_${userId}`);
    } catch (err) {
      console.error('Ошибка при запросе к API:', err);
      setError('Ошибка при загрузке данных пользователя');
    } finally {
      setLoading(false);
    }
  };
  

  // Получение данных пользователя при загрузке компонента
  useEffect(() => {
    fetchUserId();
  }, []);

  // Копирование ссылки в буфер обмена
  const handleCopy = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink).then(() => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      });
    }
  };


  const referralList = [
    { name: "Иван Иванов", date: "2024-11-28", reward: 500 },
    { name: "Петр Петров", date: "2024-11-25", reward: 300 },
    { name: "Мария Сидорова", date: "2024-11-20", reward: 400 },
  ];

  const stats = {
    totalInvites: 15,
    totalRewards: "7500₽",
    activeUsers: 5,
  };

  const generateGraphData = () => {
    let labels = [];
    let data = [];

    if (timePeriod === "day") {
      labels = ['2024-11-20', '2024-11-21', '2024-11-22', '2024-11-23', '2024-11-24', '2024-11-25', '2024-11-26', '2024-11-27', '2024-11-28'];
      data = [100, 200, 150, 300, 250, 300, 400, 450, 500];
    } else if (timePeriod === "week") {
      labels = ['2024-11-20 - 2024-11-26', '2024-11-27 - 2024-12-03'];
      data = [1200, 1500];
    } else if (timePeriod === "month") {
      labels = ['Ноябрь 2024', 'Декабрь 2024'];
      data = [6000, 4500];
    } else if (timePeriod === "year") {
      labels = ['2024', '2025'];
      data = [18000, 20000];
    }

    return data.map((value, index) => ({
      date: labels[index], // сохраняем дату
      value,
    }));
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  // Обработчик для выделения точки при движении мыши
  const handleMouseMove = (event) => {
    const { activePayload, activeLabel, activeIndex } = event;

    if (activePayload && activePayload.length > 0) {
      const value = activePayload[0].value;
      const date = activePayload[0].payload.date; // Получаем дату из данных графика

      setTooltipData({
        label: date,  // Используем дату из данных
        value: value,
      });

      setHighlightedPoint(activeIndex); // Установить индекс выделенной точки
      setTooltipPosition({
        x: event.chartX,
        y: event.chartY,
      });
    }
  };

  // Кастомный тултип
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            width: '7vw',
            height: '4vw',
            position: 'absolute',
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Полупрозрачный фон
            color: '#fff',
            padding: '0.5vw 0.75vw',
            borderRadius: '0.5vw', // Скругленные углы
            pointerEvents: 'none',
            transform: 'translate(-50%, -100%)', // Тултип всегда над курсором
            backdropFilter: 'blur(0.25vw)', // Эффект блюра
            fontSize: '0.5vw',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0 }}>{tooltipData.label}</p> {/* Показываем дату */}
          <p style={{ margin: 0 }}>{tooltipData.value}₽</p> {/* Показываем значение */}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="refferal-body">
      <h2 className='header-title'>{t("referral.title")}</h2>

      {/* Первая карточка: Реферальная ссылка */}
      <div className="card refferal-link">
        <h2>{t("referral.refferal-link.main")}</h2>
        <p>{t("referral.refferal-link.description")}</p>
        <div className="referral-container">
          <span>{referralLink}</span>
          <button onClick={handleCopy} className="copy-btn">{t("referral.refferal-list.copy-btn")}</button>
        </div>
      </div>

      {/* Вторая карточка: Список рефералов */}
      <div className="card refferal-list">
        <h2>{t("referral.refferal-list.main")}</h2>
        {referralList.length > 0 ? (
          <div className="referral-card">
            {referralList.map((referral, index) => (
              <div key={index} className="card referral-item">
                <h3>{referral.name}</h3>
                <div className='text'>
                  <p>{t("referral.refferal-list.registrationDate")}</p><p>{referral.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>{t("referral.refferal-list.youDontHaveReferrals")}</p>
        )}
      </div>

      {/* Третья карточка: Статистика */}
      <div className="card refferal-stat">
        <h2>{t("referral.refferal-stat.main")}</h2>

        {/* Фильтр для выбора периода */}
        <div className="wrapper">
          <div className="filter-container">
            <label htmlFor="time-period" className="filter-label">{t("referral.refferal-stat.selectPeriod")}</label>
            <select id="time-period" value={timePeriod} onChange={handleTimePeriodChange} className="filter-select">
              <option value="day">{t("referral.refferal-stat.time-period.days")}</option>
              <option value="week">{t("referral.refferal-stat.time-period.weeks")}</option>
              <option value="month">{t("referral.refferal-stat.time-period.months")}</option>
              <option value="year">{t("referral.refferal-stat.time-period.years")}</option>
            </select>
          </div>

          {/* График */}
          <div className="chart-container" style={{
            width: '100%',
            height: '22vw',
            borderRadius: '0.5vw',
            border: '0.2vw solid var(--footer-line) !important'
          }}>
            <ResponsiveContainer>
              <LineChart 
                data={generateGraphData()} 
                onMouseMove={handleMouseMove}
              >
                <CartesianGrid stroke="transparent" />
                {/* Используем кастомный тултип */}
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone"
                  dataKey="value"
                  stroke="var(--green-block)"
                  dot={true}
                  activeDot={{ fill: "var(--green-block)", border: "none" }}
                  connectNulls={true}
                  strokeWidth={5}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Алерт */}
      {showAlert && <div className="alert">{t("referral.linkSuccessfullyCopied")}</div>}
    </div>
  );
};

export default ReferralCard;
