import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bootstrap() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="Bootstrap">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {submittedData && (
                <Card className="mt-4">
                    <Card.Body>
                        <Card.Title>{submittedData.name}</Card.Title>
                        <Card.Text>{submittedData.email}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}

export default Bootstrap;