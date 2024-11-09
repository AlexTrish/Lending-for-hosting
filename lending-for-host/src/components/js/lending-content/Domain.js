import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';


function Domain() {
    const { t } = useTranslation();


    return (
        <div className="domain">
            <section className='domain-wrapper'>
                <h3>{t('title-domain')}</h3>
                <Form className='form-wrapper'>
                    <Form.Group className="form-container">
                        <Form.Control type="text" placeholder={t('input')} className="domain-input"/>
                        <Form.Control className='dropdown-input' />
                        <button className="btn search-btn">{t('check')}</button>
                    </Form.Group>
                </Form>
            </section>
            <section className='grid-domains'>
                <div className='domain-item'>
                    <h4>.ru</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.com</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.eu</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.me</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.org</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.ru</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.com</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.eu</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.me</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.org</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.ru</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.com</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.eu</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.me</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.org</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.ru</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.com</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.eu</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.me</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.org</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.ru</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.com</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.eu</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.me</h4>
                    <p>12$/year</p>
                </div>
                <div className='domain-item'>
                    <h4>.org</h4>
                    <p>12$/year</p>
                </div>
            </section>
        </div>
    )
}

export default Domain;