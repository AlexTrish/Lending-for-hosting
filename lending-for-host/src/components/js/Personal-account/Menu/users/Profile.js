import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import '../../PersonalPage.scss'; // Наши стили

const Profile = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const { t } = useTranslation();

  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150');
  const [tempPhoto, setTempPhoto] = useState(null);
  const cropperRef = useRef(null);
  const fileInputRef = useRef(null);

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

  return (
    <div className="profile-container">
      <h2 className='header-title'>{t('Profile Settings')}</h2>
      <form className="profile-form">
      <div className="input-group">
          <div className="photo-upload">
            <input
              type="file"
              id="profile-photo"
              ref={fileInputRef}
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
            {!tempPhoto && (
              <img
                src={profilePhoto}
                alt="Profile"
                onClick={() => fileInputRef.current.click()}
                style={{ cursor: 'pointer' }}
              />
            )}
            {tempPhoto && (
              <div>
                <Cropper
                  src={tempPhoto}
                  ref={cropperRef}
                  style={{ height: 200, width: '100%' }}
                  aspectRatio={1}
                  guides={false}
                />
                <button type="button" onClick={handleCrop} className="btn-crop">
                  {t('Save')}
                </button>
                <button type="button" onClick={handleCancelCrop} className="btn-cancel">
                  {t('Cancel')}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">{t('Email')}:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="fullName">{t('Full Name')}:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="buttons">
          <button type="button" onClick={handleSubmit} className="btn-submit">
            {t('Save Changes')}
          </button>
          <button type="button" onClick={handleCancel} className="btn-cancel">
            {t('Cancel')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;