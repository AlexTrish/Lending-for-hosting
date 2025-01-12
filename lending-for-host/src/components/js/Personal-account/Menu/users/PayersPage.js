import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import '../../PersonalPage.scss';
import { useTranslation } from 'react-i18next';

const PayersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([
    { id: 1, name: "Иван Иванов", email: "ivan@mail.com", phone: "+79991234567", status: "Активен" },
    { id: 2, name: "Петр Петров", email: "petr@mail.com", phone: "+79999876543", status: "Неактивен" },
  ]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const [newPayer, setNewPayer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleAddPayer = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewPayer({ name: "", email: "", phone: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayer({ ...newPayer, [name]: value });
  };

  const handleInvite = () => {
    if (newPayer.name && newPayer.email && newPayer.phone) {
      setData([...data, { ...newPayer, id: data.length + 1, status: "Ожидание" }]);
      handleCloseModal();
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="payers-page">
      <div className="container">
        <h2 className='header-title'>{t("payers-page.headerTitle")}</h2>
        <button className="add-button" onClick={handleAddPayer}>
          {t("payers-page.addPayer")}
        </button>

        <div className="table">
          <div className="table-header">
            <span className="number">{t("payers-page.numberId")}</span>
            <span className="name">{t("payers-page.fullName")}</span>
            <span className="email">{t("payers-page.eMail")}</span>
            <span className="phone">{t("payers-page.telephone")}</span>
            <span className="stat">{t("payers-page.status")}</span>
            <span className="move">{t("payers-page.actions")}</span>
          </div>
          <div className="table-body">
            {data.map((row) => (
              <div className="table-row" key={row.id}>
                <span className="number">{row.id}</span>
                <span className="name">{row.name}</span>
                <span className="email">{row.email}</span>
                <span className="phone">{row.phone}</span>
                <span className="stat">{row.status}</span>
                <div className="actions move">
                  <button className="edit-button">
                    <FaEdit />
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(row.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>{t("payers-page.addPayers.main")}</h3>
              <input
                type="text"
                name="name"
                placeholder={t("payers-page.addPayers.enterFullName")}
                value={newPayer.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder={t("payers-page.addPayers.enterEmail")}
                value={newPayer.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("payers-page.addPayers.enterPhoneNumber")}
                value={newPayer.phone}
                onChange={handleInputChange}
              />
              <div className="modal-footer">
                <button className="modal-button" onClick={handleCloseModal}>
                  {t("payers-page.addPayers.cancel")}
                </button>
                <button className="modal-button" onClick={handleInvite}>
                  {t("payers-page.addPayers.invite")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayersPage;
