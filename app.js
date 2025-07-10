const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from Docker and ECR!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// These are FAKE AWS credentials for TruffleHog testing
const AWS_ACCESS_KEY_ID = 'AKIA1234567890FAKE';
const AWS_SECRET_ACCESS_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

