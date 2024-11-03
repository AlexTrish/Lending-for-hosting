import React from 'react';
import Form from 'react-bootstrap/Form';

function Domain() {
    return (
        <div className="domain">
            <div>
                <h3>Приобрести домен</h3>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" value="text" placeholder="домен" />
                    </Form.Group>
                </Form>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Domain;