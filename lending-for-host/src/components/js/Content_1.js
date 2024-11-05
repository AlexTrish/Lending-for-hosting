import React from 'react';
import { useTranslation } from 'react-i18next';

function Content_1() {
    const { t } = useTranslation(); // Получаем функцию t для перевода

    return (
        <section className="about">
            <div className='content-info'>
                <h2>{t('about.title')}</h2>
                <p>
                    {t('about.description')}
                </p>
            </div>
            <div className="content-block-info"><div className='svg-content-block-info'></div></div>
        </section>
    );
}

export default Content_1;
