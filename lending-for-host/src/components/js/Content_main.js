import React from 'react';

function Content_main() {
    return (
        <section className="hero-section">
            <div className="container text-left">
                <h2>
                    Быстро Надёжно <br/>
                    Доступно
                </h2>
                <p>Мы гарантируем работу наших серверов на весь оплаченный срок! Хостинг облачных серверов в Европе.</p>
                <button className="btn join-btn">Присоединиться</button>
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