// src/components/js/Content_4.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Content_4() {
    const { t } = useTranslation();

    return (
        <section className="services text-center">
            <h2>{t('services.title')}</h2>
            <div className="service-list">
                <div className="service-item"><div className='green-box'></div></div>
                <div className="service-item"><div className='green-box'></div></div>
                <div className="service-item"><div className='green-box'></div></div>
            </div>
        </section>
    );
}

export default Content_4;
