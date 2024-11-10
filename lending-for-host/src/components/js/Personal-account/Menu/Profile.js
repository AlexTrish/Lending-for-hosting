import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PersonalPage.scss';

const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150');
  
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container profile-container" style={{ padding: '2vw' }}>
      {/* Блок с фото и информацией о пользователе */}
      <div className="profile-header row align-items-center mb-4">
        <div className="col-md-4 text-center">
          <div className="profile-photo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={profilePhoto} alt="Profile" className="rounded" style={{ width: '20vw', height: '20vw' }} />
            <input type="file" onChange={handlePhotoUpload} className="form-control mt-3" />
          </div>
        </div>
        <div className="col-md-8">
          <h2 className="text-secondary" style={{ color: 'var(--h2-text-color) !important', fontSize: '2vw', marginBottom:'1.5vw' }}>UserName</h2>
          <form className="tariff-form">
            <div className="mb-3">
              <label htmlFor="service" className="form-label">Выберите услугу:</label>
              <select id="service" name="service" className="form-select" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--input-text-color)' }}>
                <option value="service1">Услуга 1</option>
                <option value="service2">Услуга 2</option>
                <option value="service3">Услуга 3</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="tariff" className="form-label">Выберите тариф:</label>
              <select id="tariff" name="tariff" className="form-select" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--input-text-color)' }}>
                <option value="basic">Базовый</option>
                <option value="premium">Премиум</option>
                <option value="pro">Про</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Выберите время:</label>
              <select id="duration" name="duration" className="form-select" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--input-text-color)' }}>
                <option value="1_month">1 месяц</option>
                <option value="6_months">6 месяцев</option>
                <option value="1_year">1 год</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'var(--green-block)', color: 'var(--button-text-color)' }}>
              Подтвердить
            </button>
          </form>
        </div>
      </div>
      
      {/* Блок с доступными картами для оплаты */}
      <div className="payment-cards mt-4" style={{backgroundColor: 'var(--bg-color-profile)', padding: '1vw', borderRadius: '1vw'}}>
        <h3 style={{ color: 'var(--h2-text-color)' }}>Доступные карты для оплаты</h3>
        <ul className="list-group">
          <li className="list-group-item" style={{ backgroundColor: 'var(--bg-color-prof-block-content)', color: 'var(--text-color)' }}>VISA - **** **** **** 1234</li>
          <li className="list-group-item" style={{ backgroundColor: 'var(--bg-color-prof-block-content)', color: 'var(--text-color)' }}>MasterCard - **** **** **** 5678</li>
          <li className="list-group-item" style={{ backgroundColor: 'var(--bg-color-prof-block-content)', color: 'var(--text-color)' }}>МИР - **** **** **** 9012</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;