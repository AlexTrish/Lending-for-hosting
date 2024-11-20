// src/components/js/Content_4.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaServer, FaCloud } from 'react-icons/fa'; // Пример иконок

function Content_4() {
  const { t } = useTranslation();

  return (
    <section className="services text-center">
      <h2>{t('services.title')}</h2>
      <div className="service-list">
        {/* VPN */}
        <div className="service-item">
          <div className="service-icon">
            <FaShieldAlt size={50} color="#4CAF50" />
          </div>
          <h3 className="green-box-heading">{t("menu.vpn")}</h3>
          <p className="service-description">
            {t("menu.vpn-desc")} {/* Краткое описание VPN */}
          </p>
          <button className="green-box-btn">{t('Details')}</button>
        </div>

        {/* Domains */}
        <div className="service-item">
          <div className="service-icon">
            <FaServer size={50} color="#FF9800" />
          </div>
          <h3 className="green-box-heading">{t("menu.domains")}</h3>
          <p className="service-description">
            {t("menu.domains-desc")} {/* Краткое описание доменов */}
          </p>
          <button className="green-box-btn">{t('Details')}</button>
        </div>

        {/* Bulletproof */}
        <div className="service-item">
          <div className="service-icon">
            <FaCloud size={50} color="#2196F3" />
          </div>
          <h3 className="green-box-heading">{t("menu.bulletproof")}</h3>
          <p className="service-description">
            {t("menu.bulletproof-desc")} {/* Краткое описание абузоустойчивых серверов */}
          </p>
          <button className="green-box-btn">{t('Details')}</button>
        </div>
      </div>
    </section>
  );
}

export default Content_4;
