import React, { useEffect } from 'react';
import Content_main from './Content_main';
import Content_1 from './Content_1';
import Content_2 from './Content_2';
import Content_3 from './Content_3';
import Content_4 from './Content_4';

import '../css/styles.scss';

function Dashboard({ currentMenu }) {
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
        <div> <Content_1 /> {/* Контент для VPS */} </div>
      ) : currentMenu === 'VDS' ? (
        <div> {/* Контент для VDS */} </div>
      ) : currentMenu === 'VPN' ? (
        <div> {/* Контент для VPN */} </div>
      ) : currentMenu === 'cl-pn' ? (
        <div> {/* Контент для Cloud-Panel */} </div>
      ) : currentMenu === 'bulletproof' ? (
        <div> {/* Контент для Bulletproof */} </div>
      ) : currentMenu === 'domain' ? (
        <div> {/* Контент для domain */} </div>
      ) : currentMenu === 'buy-domain' ? (
        <div> {/* Контент для buy-domain */} </div>
      ) : currentMenu === 'rules' ? (
        <div> {/* Контент для rules */} </div>
      ) : currentMenu === 'referal' ? (
        <div> {/* Контент для referal */} </div>
      ) : null}
    </div>
  );
}

export default Dashboard;
