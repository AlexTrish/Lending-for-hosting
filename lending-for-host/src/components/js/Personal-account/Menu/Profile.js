import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PersonalPage.scss';

const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default USA country code

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

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Profile updated');
  };

  const handleCancel = () => {
    // Reset to initial values or close the form
    console.log('Changes canceled');
  };

  // List of countries with their codes
  const countryList = [
    { code: '+1', name: 'США' },
    { code: '+44', name: 'Великобритания' },
    { code: '+7', name: 'Россия' },
    { code: '+33', name: 'Франция' },
    { code: '+49', name: 'Германия' },
    { code: '+61', name: 'Австралия' },
    { code: '+81', name: 'Япония' },
    { code: '+34', name: 'Испания' },
    { code: '+39', name: 'Италия' },
    { code: '+55', name: 'Бразилия' },
    // Add more countries here as needed
  ];

  return (
    <div className="profile-container">
      <h2 className="profile-header">Настройка профиля</h2>

      <div className='form-and-photo-container'>
        <div className="photo-upload">
          <label htmlFor="profilePhoto" className="form-label">Фото профиля</label>
          <div className="photo-preview">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
            <input type="file" id="profilePhoto" accept="image/*" onChange={handlePhotoUpload} />
          </div>
        </div>

        <div className='form-container'>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">ФИО</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Электронная почта</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">Пароль</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">Подтверждение пароля</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber" className="form-label">Номер телефона</label>
        <div className="input-group">
          <select
            className="form-select"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            {countryList.map((country, index) => (
              <option key={index} value={country.code}>
                {country.code} {country.name}
              </option>
            ))}
          </select>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Введите номер"
          />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-secondary" onClick={handleCancel}>Отменить</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Подтвердить</button>
      </div>
    </div>
  );
};

export default Profile;
