import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

export default function Bootstrap() {
    return (
        <div>
            <Row className="m-5">
                <Button as={Col} variant="secondary">Primary</Button>{' '}
                <Button as={Col} variant="primary" className="mx-2">Button #2</Button>
                <Button as={Col} variant="success">Button #3</Button>
            </Row>
        </div>
    )
}
