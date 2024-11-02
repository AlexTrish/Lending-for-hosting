import React from 'react';
import Content_main from './Content_main';
import Content_1 from './Content_1';
import Content_2 from './Content_2';
import Content_3 from './Content_3';
import Content_4 from './Content_4';

function Dashboard() {


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
                    
                </div>
            ) : currentMenu === 'VDS' ? (
                <div>

                </div>
            ) : currentMenu === 'VPN' ? (
                <div>

                </div>
            ) : currentMenu === 'cl-pn' ? (
                <div>

                </div>
            ) : currentMenu === 'bulletproof' ? (
                <div>

                </div>
            ) : currentMenu === 'VPS' ? (
                <div>

                </div>
            ) : (
            )}
        </div>
    );
}

export default Dashboard;