import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext, AuthProvider } from '../../AuthContext';
import Header from './AuthHeader';
import Footer from './Footer';
import AuthHeader from './AuthHeader';
import Main from './lending-content/Main';
import Company from './lending-content/Company';
import About_us from './lending-content/About-us';
import Monitoring from './lending-content/Monitoring';
import Features from './lending-content/Features';
import Services from './lending-content/Services';
import Domain from "./lending-content/Domain";
import Rules from './lending-content/Rules';
import Pay from './lending-content/Pay';
import '../css/styles.scss';

function Dashboard({ setCurrentMenu, currentMenu }) {
  const { t } = useTranslation();

  const pricingPlans = [
    { title: t('plans.basic.name'), price: t('plans.basic.price'), key: "basic" },
    { title: t('plans.improved.name'), price: t('plans.improved.price'), key: "improved" },
    { title: t('plans.advanced.name'), price: t('plans.advanced.price'), key: "advanced" },
    { title: t('plans.premium.name'), price: t('plans.premium.price'), key: "premium" },
  ];

  useEffect(() => {
    localStorage.setItem('currentMenu', currentMenu);
  }, [currentMenu]);

  const renderPricingCards = (cardPlans) => (
    <section className='buy-cards'>      
      {cardPlans.map((plan) => (
        <div className='buy-card' key={plan.key}>
          <div className='buy-card-header'>
            <span>{t('plans.basic.label')}</span>
            <h4>{plan.title}</h4>
            <div className='line-buy-card'></div>
          </div>
          <div className='buy-card-body'>
            <div className='buy-card-price'>
              <h5>{plan.price}</h5>
              <p>{t('plans.basic.savings')}</p>
            </div>
            <div className='line-buy-card'></div>
            <div className='buy-card-description'></div>
          </div>
          <div className='buy-card-footer'>
            <div className='line-buy-card'></div>
            <button className='buy-card-btn'>
              <div className='img-btn-buy'></div>
              {t('buy')}
            </button>
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <div className="dashboard">
      <AuthContext.Consumer>
        {({ isAuthenticated }) =>
          isAuthenticated ? (
            <AuthHeader setCurrentMenu={setCurrentMenu} />
            ) : (
            <Header setCurrentMenu={setCurrentMenu} />
          )
        }
      </AuthContext.Consumer>
      {currentMenu === 'Main' && (
        <>
          <Main />
          <Company />
          <About_us />
          <Monitoring />
          <Features />
          <Services />
          <Pay />
        </>
      )}
      {currentMenu === 'VPS' && (
        <>
          <section className='main-container'>
            <div className='container-block vps-blc'></div>
            <div className='container-info'>
              <h3>{t('VPS.title', { defaultValue: 'VPS' })}</h3>
              <p>{t('VPS.description', { defaultValue: 'Описание VPS' })}</p>
            </div>
          </section>
          {renderPricingCards(pricingPlans)}
        </>
      )}
      {currentMenu === 'VDS' && (
        <>
          <section className='main-container'>
            <div className='container-block vpd-blc'></div>
            <div className='container-info'>
              <h3>{t('vds.title', { defaultValue: 'VDS' })}</h3>
              <p>{t('vds.description', { defaultValue: 'Описание VDS' })}</p>
            </div>
          </section>
          {renderPricingCards(pricingPlans)}
        </>
      )}
      {currentMenu === 'VPN' && (
        <>
          <section className='main-container'>
            <div className='container-block vpn-blc'></div>
            <div className='container-info'>
              <h3>{t('vpn.title', { defaultValue: 'VPN' })}</h3>
              <p>{t('vpn.description', { defaultValue: 'Описание VPN' })}</p>
            </div>
          </section>
          {renderPricingCards(pricingPlans)}
        </>
      )}
      {currentMenu === 'cl-pn' && (
        <>
          <section className='main-container'>
            <div className='container-block cl-pn-blc'></div>
            <div className='container-info'>
              <h3>{t("cloudPanel.title", { defaultValue: 'Облачная панель' })}</h3>
              <p>{t("cloudPanel.description", { defaultValue: 'Описание облачной панели' })}</p>
            </div>
          </section>
          {renderPricingCards(pricingPlans)}
        </>
      )}
      {currentMenu === 'bulletproof' && (
        <>
          <section className='main-container'>
            <div className='container-block bp-blc'></div>
            <div className='container-info'>
              <h3>{t('bulletproof.title', { defaultValue: 'Абузоустойчивые серверы' })}</h3>
              <p>{t('bulletproof.description', { defaultValue: 'Описание абузоустойчивых серверов' })}</p>
            </div>
          </section>
          {renderPricingCards(pricingPlans)}
        </>
      )}
      {currentMenu === 'domains' && (
        <>
          <section className='main-container'>
            <div className='container-block dm-blc'></div>
            <div className='container-info'>
              <h3>{t("domains.title", { defaultValue: 'Домены' })}</h3>
              <p>{t("domains.description", { defaultValue: 'Описание доменов' })}</p>
              <button className='btn btn-domain' onClick={() => setCurrentMenu('buy-domain')}>
                {t("domains.buyButton", { defaultValue: 'Купить домен' })}
              </button>
            </div>
          </section>
        </>
      )}
      {currentMenu === 'buy-domain' && <Domain />}
      {currentMenu === 'rules' && <Rules />}
      {currentMenu === 'referal' && (
        <>
          <section className='main-container'>
            <div className='container-block ref-blc'></div>
            <div className='container-info'>
              <h3>{t("referral.title", { defaultValue: 'Реферальная программа' })}</h3>
              <p>{t("referral.description", { defaultValue: 'Описание реферальной программы' })}</p>
            </div>
          </section>
        </>
      )}
    <Footer />
    </div>
  );
}

export default Dashboard;