import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Grid } from '@mui/material';

function Material() {
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
        <div className="Material">
            <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>

            {submittedData && (
                <Card variant="outlined" style={{ marginTop: '16px' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {submittedData.name}
                        </Typography>
                        <Typography color="textSecondary">
                            {submittedData.email}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

export default Material;