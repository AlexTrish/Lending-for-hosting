import React from 'react';
import { useTranslation } from 'react-i18next';

function About_us() {
    const { t } = useTranslation();

    return (
        <section className="about-us-container-wrapper">
            <h2>{t('about.lable')}</h2>
            <div className="about-us-container">
                <div className='about-us-info-block'>
                    <div className='about-us-ico garant'></div>
                    <h3>{t('about.guarantee')}</h3>
                    <p>{t('about.guarantee-descriptionPt1')}<br />{t('about.guarantee-descriptionPt2')}</p>
                </div>

                <div className='about-us-info-block'>
                    <div className='about-us-ico shield'></div>
                    <h3>{t('about.shield')}</h3>
                    <p>{t('about.shield-descriptionPt1')}<br />{t('about.shield-descriptionPt2')}</p>
                </div>

                <div className='about-us-info-block'>
                    <div className='about-us-ico support'></div>
                    <h3>{t('about.support')}</h3>
                    <p>{t('about.support-descriptionPt1')}<br />{t('about.support-descriptionPt2')}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About_us;
