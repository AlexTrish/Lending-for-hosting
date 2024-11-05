import React from 'react';
import { useTranslation } from 'react-i18next';

function Content_2() {
    const { t } = useTranslation(); // Используем хук для перевода

    return (
        <section className="monitoring">
            <div className="content-blocks-wrapper">
                <div className="bl-content content-block-info_1"></div>
                <div className="bl-content content-block-info_2"></div>
                <div className="bl-content content-block-info_3"></div>
            </div>
            <div className='content-info-monitor'>
                <h2>{t('monitoring.title')}</h2>
                <p>
                    {t('monitoring.description')}
                </p>
            </div>
        </section>
    );
}

export default Content_2;
