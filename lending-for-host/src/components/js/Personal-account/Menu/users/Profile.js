import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../PersonalPage.scss';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const { t } = useTranslation();

  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150');
  const [tempPhoto, setTempPhoto] = useState(null);
  const cropperRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current.cropper;
    const croppedCanvas = cropper.getCroppedCanvas({ width: 150, height: 150 });
    const croppedImage = croppedCanvas.toDataURL();
    setProfilePhoto(croppedImage);
    setTempPhoto(null);
  };

  const handleCancelCrop = () => {
    setTempPhoto(null);
  };

  const handleSubmit = () => {
    console.log('Profile updated');
  };

  const handleCancel = () => {
    console.log('Changes canceled');
  };

  const countryList = [
    { code: "+1", name: "США" },
    { code: "+7", name: "Россия" },
    { code: "+20", name: "Египет" },
    { code: "+27", name: "Южно-Африканская Республика" },
    { code: "+30", name: "Греция" },
    { code: "+31", name: "Нидерланды" },
    { code: "+32", name: "Бельгия" },
    { code: "+33", name: "Франция" },
    { code: "+34", name: "Испания" },
    { code: "+36", name: "Венгрия" },
    { code: "+39", name: "Италия" },
    { code: "+40", name: "Румыния" },
    { code: "+41", name: "Швейцария" },
    { code: "+44", name: "Великобритания" },
    { code: "+45", name: "Дания" },
    { code: "+46", name: "Швеция" },
    { code: "+47", name: "Норвегия" },
    { code: "+48", name: "Польша" },
    { code: "+49", name: "Германия" },
    { code: "+51", name: "Перу" },
    { code: "+52", name: "Мексика" },
    { code: "+53", name: "Куба" },
    { code: "+54", name: "Аргентина" },
    { code: "+55", name: "Бразилия" },
    { code: "+56", name: "Чили" },
    { code: "+57", name: "Колумбия" },
    { code: "+58", name: "Венесуэла" },
    { code: "+61", name: "Австралия" },
    { code: "+62", name: "Индонезия" },
    { code: "+63", name: "Филиппины" },
    { code: "+64", name: "Новая Зеландия" },
    { code: "+65", name: "Сингапур" },
    { code: "+66", name: "Таиланд" },
    { code: "+81", name: "Япония" },
    { code: "+82", name: "Южная Корея" },
    { code: "+84", name: "Вьетнам" },
    { code: "+86", name: "Китай" },
    { code: "+90", name: "Турция" },
    { code: "+91", name: "Индия" },
    { code: "+92", name: "Пакистан" },
    { code: "+93", name: "Афганистан" },
    { code: "+94", name: "Шри-Ланка" },
    { code: "+95", name: "Мьянма" },
    { code: "+98", name: "Иран" },
    { code: "+212", name: "Марокко" },
    { code: "+213", name: "Алжир" },
    { code: "+216", name: "Тунис" },
    { code: "+218", name: "Ливия" },
    { code: "+220", name: "Гамбия" },
    { code: "+221", name: "Сенегал" },
    { code: "+222", name: "Мавритания" },
    { code: "+223", name: "Мали" },
    { code: "+224", name: "Гвинея" },
    { code: "+225", name: "Кот-д’Ивуар" },
    { code: "+226", name: "Буркина-Фасо" },
    { code: "+227", name: "Нигер" },
    { code: "+228", name: "Того" },
    { code: "+229", name: "Бенин" },
    { code: "+230", name: "Маврикий" },
    { code: "+231", name: "Либерия" },
    { code: "+232", name: "Сьерра-Леоне" },
    { code: "+233", name: "Гана" },
    { code: "+234", name: "Нигерия" },
    { code: "+235", name: "Чад" },
    { code: "+236", name: "Центральноафриканская Республика" },
    { code: "+237", name: "Камерун" },
    { code: "+238", name: "Кабо-Верде" },
    { code: "+239", name: "Сан-Томе и Принсипи" },
    { code: "+240", name: "Экваториальная Гвинея" },
    { code: "+241", name: "Габон" },
    { code: "+242", name: "Республика Конго" },
    { code: "+243", name: "Демократическая Республика Конго" },
    { code: "+244", name: "Ангола" },
    { code: "+245", name: "Гвинея-Бисау" },
    { code: "+246", name: "Британская территория в Индийском океане" },
    { code: "+248", name: "Сейшелы" },
    { code: "+249", name: "Судан" },
    { code: "+250", name: "Руанда" },
    { code: "+251", name: "Эфиопия" },
    { code: "+252", name: "Сомали" },
    { code: "+253", name: "Джибути" },
    { code: "+254", name: "Кения" },
    { code: "+255", name: "Танзания" },
    { code: "+256", name: "Уганда" },
    { code: "+257", name: "Бурунди" },
    { code: "+258", name: "Мозамбик" },
    { code: "+260", name: "Замбия" },
    { code: "+261", name: "Мадагаскар" },
    { code: "+262", name: "Реюньон" },
    { code: "+263", name: "Зимбабве" },
    { code: "+264", name: "Намибия" },
    { code: "+265", name: "Малави" },
    { code: "+266", name: "Лесото" },
    { code: "+267", name: "Ботсвана" },
    { code: "+268", name: "Эсватини" },
    { code: "+269", name: "Коморы" },
    { code: "+290", name: "Острова Святой Елены, Вознесения и Тристан-да-Кунья" },
    { code: "+291", name: "Эритрея" }
  ];
  
  const sortCountriesAlphabetically = (countries) => {
    return countries.sort((a, b) => a.name.localeCompare(b.name));
  };
  
  const sortedCountryList = sortCountriesAlphabetically(countryList);

  return (
    <div className="profile-container">
      <h2 className="profile-header">Настройка профиля</h2>

      <div className="form-and-photo-container">
        <div className="photo-upload">
          <div className="photo-preview">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
            <input type="file" id="profilePhoto" accept="image/*" onChange={handlePhotoUpload} />
          </div>
        </div>

        <div className="form-container">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Имя пользователя</label>
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

          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">Номер телефона</label>
            <div className="input-group">
              <select className="form-select" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                {sortedCountryList.map((country, index) => (
                  <option key={index} value={country.code}>
                    {t(`countries.${country.code}`)} ({country.code})
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

      <div className="form-actions">
        <button className="btn btn-secondary" onClick={handleCancel}>Отменить</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Подтвердить</button>
      </div>

      {/* Модальное окно для обрезки изображения */}
      {tempPhoto && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Обрезка изображения</h5>
                <button type="button" className="close" onClick={handleCancelCrop}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Cropper
                  src={tempPhoto}
                  style={{ height: 400, width: '100%' }}
                  initialAspectRatio={1}
                  aspectRatio={1}
                  guides={false}
                  ref={cropperRef}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancelCrop}>Отмена</button>
                <button type="button" className="btn btn-primary" onClick={handleCrop}>Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
