// src/components/js/Content_3.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Импортируем хук

function Content_3() {
    const { t } = useTranslation(); // Получаем функцию перевода

    return (
        <section className="features">
            <div className="center-info-block">
                <div className='svg-center-info-block'></div>
            </div>
            <div className="features-container">
                <div className="feature left-info-block">
                    <h3>{t('features.bulletproofServers.title')}</h3>
                    <p>{t('features.bulletproofServers.description')}</p>
                </div>
                <div className="feature right-info-block">
                    <h3>{t('features.dataCenter.title')}</h3>
                    <p>{t('features.dataCenter.description')}</p>
                </div>
            </div>
        </section>
    );
}

export default Content_3;
