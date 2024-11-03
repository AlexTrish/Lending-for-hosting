import React, { useEffect } from 'react';
import Content_main from './Content_main';
import Content_1 from './Content_1';
import Content_2 from './Content_2';
import Content_3 from './Content_3';
import Content_4 from './Content_4';
import Rules from './Rules';

import '../css/styles.scss';
import Domain from "./Domain";

function Dashboard({ setCurrentMenu, currentMenu }) {
  useEffect(() => {
    localStorage.setItem('currentMenu', currentMenu);
  }, [currentMenu]);

  return (
    <div className="dashboard">
      {currentMenu === 'Main' ? (
        <div>
          <Content_main />
          <Content_1 />
          <Content_2 />
          <Content_3 />
          <Content_4 />
        </div>
      ) : currentMenu === 'VPS' ? (
          <div>
            <section className='main-container'>
              <div className='container-block'></div>
              <div className='container-info'>
                <h3>VPS</h3>
                <p>это услуга хостинг-провайдера, где пользователь получает свой удалённый рабочий стол. Пользователь VPS имеет полные root-права по использованию. Может установить любое доступное ПО без каких-либо ограничений. Другими словами, это удалённый компьютер, который работает круглые сутки.<br/><br/>
                  Если у Вас имеются сложности в установке ПО, наша команда всегда готова помочь.</p>
              </div>
            </section>
            <section className='buy-cards'>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Базовый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Улучшенный</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>899 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Продвинутый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>1299 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Premium</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>2499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                  <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
            </section>
          </div>
      ) : currentMenu === 'VDS' ? (
          <div>
            <section className='main-container'>
              <div className='container-block'></div>
              <div className='container-info'>
                <h3>VDS</h3>
                <p>это услуга хостинг-провайдера, где пользователь получает свой удалённый рабочий стол. Пользователь VPS имеет полные root-права по использованию. Может установить любое доступное ПО без каких-либо ограничений. Другими словами, это удалённый компьютер, который работает круглые сутки.<br/><br/>
                  Если у Вас имеются сложности в установке ПО, наша команда всегда готова помочь.</p>
              </div>
            </section>
            <section className='buy-cards'>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Базовый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Улучшенный</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>899 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Продвинутый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>1299 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Premium</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>2499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                  <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
            </section>
          </div>
      ) : currentMenu === 'VPN' ? (
          <div>
            <section className='main-container'>
              <div className='container-block'></div>
              <div className='container-info'>
                <h3>VPN</h3>
                <p>это услуга хостинг-провайдера, где пользователь получает свой удалённый рабочий стол. Пользователь VPS имеет полные root-права по использованию. Может установить любое доступное ПО без каких-либо ограничений. Другими словами, это удалённый компьютер, который работает круглые сутки.<br/><br/>
                  Если у Вас имеются сложности в установке ПО, наша команда всегда готова помочь.</p>
              </div>
            </section>
            <section className='buy-cards'>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Базовый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Улучшенный</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>899 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Продвинутый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>1299 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Premium</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>2499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                  <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
            </section>
          </div>
      ) : currentMenu === 'cl-pn' ? (
          <div>
            <section className='main-container'>
              <div className='container-block'></div>
              <div className='container-info'>
                <h3>Cloud-Panel</h3>
                <p>это услуга хостинг-провайдера, где пользователь получает свой удалённый рабочий стол. Пользователь VPS имеет полные root-права по использованию. Может установить любое доступное ПО без каких-либо ограничений. Другими словами, это удалённый компьютер, который работает круглые сутки.<br/><br/>
                  Если у Вас имеются сложности в установке ПО, наша команда всегда готова помочь.</p>
              </div>
            </section>
            <section className='buy-cards'>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Базовый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Улучшенный</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>899 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Продвинутый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>1299 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Premium</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>2499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                  <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
            </section>
          </div>
      ) : currentMenu === 'bulletproof' ? (
          <div>
            <section className='main-container'>
              <div className='container-block'></div>
              <div className='container-info'>
                <h3>Абузоустойчивые сервера</h3>
                <p>это услуга хостинг-провайдера, где пользователь получает свой удалённый рабочий стол. Пользователь VPS имеет полные root-права по использованию. Может установить любое доступное ПО без каких-либо ограничений. Другими словами, это удалённый компьютер, который работает круглые сутки.<br/><br/>
                  Если у Вас имеются сложности в установке ПО, наша команда всегда готова помочь.</p>
              </div>
            </section>
            <section className='buy-cards'>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Базовый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Улучшенный</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>899 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Продвинутый</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>1299 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
              <div className='buy-card'>
                <div className='buy-card-header'>
                  <span>тариф</span>
                  <h4>Premium</h4>
                  <div className='line-buy-card'></div>
                </div>
                <div className='buy-card-body'>
                  <div className='buy-card-price'>
                    <h5>2499 ₽/мес</h5>
                    <p>Вы можете сэкономить до 45%, выбрав больший срок заказа</p>
                  </div>
                  <div className='line-buy-card'></div>
                  <div className='buy-card-description'></div>
                </div>
                <div className='buy-card-footer'>
                  <div className='line-buy-card'></div>
                  <button className='buy-card-btn'>
                    <div className='img-btn-buy'></div>
                    Заказать
                  </button>
                </div>
              </div>
            </section>
          </div>
      ) : currentMenu === 'domains' ? (
          <div>
            <section className='main-container'>
              <div className='container-block'></div>
              <div className='container-info'>
                <h3>Домены</h3>
                <p>это услуга хостинг-провайдера, где пользователь получает свой удалённый рабочий стол. Пользователь VPS имеет полные root-права по использованию. Может установить любое доступное ПО без каких-либо ограничений. Другими словами, это удалённый компьютер, который работает круглые сутки.<br/><br/>
                  Если у Вас имеются сложности в установке ПО, наша команда всегда готова помочь.</p>
                  <button className='btn btn-buy-domain' onClick={() => setCurrentMenu('buy-domain')}><div className='img-btn-buy'></div></button>
              </div>
            </section>
          </div>
      ) : currentMenu === 'buy-domain' ? (
        <div> <Domain/> </div>
      ) : currentMenu === 'rules' ? (
        <div> <Rules /> </div>
      ) : currentMenu === 'referal' ? (
          <div>
            <section className='main-container'>
              <div className='container-block'></div>
              <div className='container-info'>
                <h3>Реферальная система</h3>
                <p>это услуга хостинг-провайдера, где пользователь получает свой удалённый рабочий стол. Пользователь VPS имеет полные root-права по использованию. Может установить любое доступное ПО без каких-либо ограничений. Другими словами, это удалённый компьютер, который работает круглые сутки.<br/><br/>
                  Если у Вас имеются сложности в установке ПО, наша команда всегда готова помочь.</p>
              </div>
            </section>
          </div>
      ) : null}
    </div>
  );
}

export default Dashboard;
