import React from 'react';
import { useTranslation } from 'react-i18next';


function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer-personal">
            <div className='footer-line'></div>
            <p>{t("right")}</p>
        </footer>
    );
}

export default Footer;