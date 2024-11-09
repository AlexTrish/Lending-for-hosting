import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Button, Form } from 'react-bootstrap';

function Content_main() {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    // Функции для управления отображением модального окна
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <section className="hero-section">
            <div className="container text-left">
                <h2>
                    {t('content_main.title.part1')} {t('content_main.title.part2')}
                    <br /> {t('content_main.title.part3')}
                </h2>
                <p>{t('content_main.description')}</p>
                <button className="btn join-btn" onClick={handleShow}>
                    {t('content_main.joinButton')}
                </button>
            </div>
            <div className='content-blocks'>
                <div className='content-wrapper'>
                    <div className='miniblocks-type-two ico-three'><div className='three'></div></div>
                    <div className='miniblocks-type-one ico-one'><div className='one'></div></div>
                    <div className='miniblocks-type-one ico-two'><div className='two'></div></div>
                    <div className='miniblocks-type-two ico-none'></div>
                </div>
            </div>

            {/* Модальное окно для регистрации */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('content_main.registerTitle')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>{t('form-sign-in.username')}</Form.Label>
                            <Form.Control type="text" placeholder={t('form-sign-in.usernamePlaceholder')} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{t('form-sign-in.email')}</Form.Label>
                            <Form.Control type="email" placeholder={t('form-sign-in.emailPlaceholder')} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{t('form-sign-in.password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('form-sign-in.passwordPlaceholder')} />
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>{t('form-sign-in.confirmPassword')}</Form.Label>
                            <Form.Control type="password" placeholder={t('form-sign-in.confirmPasswordPlaceholder')} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label={t('form-sign-in.agreeTerms')} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('form-sign-in.close')}
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {t('form-sign-in.register')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default Content_main;
