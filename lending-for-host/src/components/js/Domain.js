import React from 'react';
import Form from 'react-bootstrap/Form';

function Domain() {
    return (
        <div className="domain">
            <div>
                <h3>Приобрести домен</h3>
                <Form>
                    <Form.Group className="form-conteiner">
                        <Form.Control type="text" placeholder="Введите домен" className="domain-color"/>
                        <div className='input-dropdown domain-color'></div>
                        <button className="btn search-btn">Проверить</button>
                    </Form.Group>
                </Form>
            </div>

        </div>
    )
}

export default Domain;