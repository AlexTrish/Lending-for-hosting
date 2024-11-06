import React from 'react';
import { useTranslation } from 'react-i18next';

function About_us() {
    const { t } = useTranslation();

    return (
        <section className="about-us-container-wrapper">
            <h2>Почему вы должны выбрать нас?</h2>
            <div className="about-us-container">
                <div className='about-us-info-block'>
                    <div className='about-us-ico garant'></div>
                    <h3>100% Гарантия</h3>
                    <p>
                        В случае неисправности, мы обьязательно
                    <br />выдадим Вам замену.
                    </p>
                </div>

                <div className='about-us-info-block'>
                    <div className='about-us-ico shield'></div>
                    <h3>Защита и безопасность</h3>
                    <p>
                        Мы гарантируем защиту Ваших
                    <br />персональных данных.
                    </p>
                </div>

                <div className='about-us-info-block'>
                    <div className='about-us-ico support'></div>
                    <h3>Круглосуточная поддержка</h3>
                    <p>
                        Наши операторы работают круглые сутки
                    <br />Вы всегда сможете получить помощь от нас!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About_us;
