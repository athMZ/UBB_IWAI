import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';

function Ant() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setSubmittedData(formData);
    };

    return (
        <div className="Ant">
            <Form onFinish={handleSubmit}>
                <Form.Item label="Name">
                    <Input placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
                </Form.Item>

                <Form.Item label="Email">
                    <Input placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            {submittedData && (
                <Card title={submittedData.name} style={{ marginTop: '16px' }}>
                    <p>{submittedData.email}</p>
                </Card>
            )}
        </div>
    );
}

export default Ant;