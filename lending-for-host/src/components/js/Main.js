import React from 'react';
import { useTranslation } from 'react-i18next';

function Content_main() {
    const { t } = useTranslation();

    return (
        <section className="hero-section">
            <div className="container text-left">
                <h2>
                    {t('content_main.title.part1')} {t('content_main.title.part2')}
                    <br/> {t('content_main.title.part3')}
                </h2>
                <p>{t('content_main.description')}</p>
                <button className="btn join-btn">{t('content_main.joinButton')}</button>
            </div>
            <div className='content-blocks'>
                <div className='content-wrapper'>
                    <div className='miniblocks-type-two ico-three'><div className='three'></div></div>
                    <div className='miniblocks-type-one ico-one'><div className='one'></div></div>
                    <div className='miniblocks-type-one ico-two'><div className='two'></div></div>
                    <div className='miniblocks-type-two ico-none'></div>
                </div>
            </div>
        </section>
    );
}

export default Content_main;
