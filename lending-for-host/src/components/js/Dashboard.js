import React from 'react';
import Content_main from './Content_main';
import Content_1 from './Content_1';
import Content_2 from './Content_2';
import Content_3 from './Content_3';
import Content_4 from './Content_4';

function Dashboard() {
    return (
        <div className="dashboard">
            <Content_main />
            <Content_1 />
            <Content_2 />
            <Content_3 />
            <Content_4 />
        </div>
    );
}

export default Dashboard;