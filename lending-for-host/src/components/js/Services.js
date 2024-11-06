// src/components/js/Content_4.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Content_4() {
    const { t } = useTranslation();

    return (
        <section className="services text-center">
            <h2>{t('services.title')}</h2>
            <div className="service-list">
                <div className="service-item">
                    <h3 className='green-box-heading'>{t("menu.vpn")}</h3>
                    <div className='green-box'><div className='img-block vpn-block'></div></div>
                    <button className='green-box-btn'>{t('Details')}</button>
                </div>
                <div className="service-item">
                    <h3 className='green-box-heading'>{t("menu.domains")}</h3>
                    <div className='green-box'><div className='img-block domain-block'></div></div>
                    <button className='green-box-btn'>{t('Details')}</button>
                </div>
                <div className="service-item">
                    <h3 className='green-box-heading'>{t("menu.bulletproof")}</h3>
                    <div className='green-box'><div className='img-block bulletproof-block'></div></div>
                    <button className='green-box-btn'>{t('Details')}</button>
                </div>
            </div>
        </section>
    );
}

export default Content_4;
