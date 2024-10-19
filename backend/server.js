const express = require('express');
const crypto = require('crypto');
const path = require('path');
const app = express();

app.use(express.json());

// Mock database for purchased projects (use a real DB in production)
let purchases = [];

// Payment verification endpoint
app.post('/api/verify-payment', async (req, res) => {
  const { paymentId, projectId } = req.body;

  try {
    // Google Pay's token verification process would go here
    // Verify the token and confirm payment (mocked for simplicity)

    // Simulate successful payment verification
    const paymentVerified = true;

    if (paymentVerified) {
      purchases.push({ paymentId, projectId });
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Payment not successful' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Project download endpoint
app.get('/api/download/:projectId', (req, res) => {
  const { projectId } = req.params;

  const purchase = purchases.find((p) => p.projectId === parseInt(projectId));

  if (purchase) {
    const filePath = path.join(__dirname, 'projects', `project-${projectId}.zip`);
    res.download(filePath);
  } else {
    res.status(403).json({ message: 'You do not have access to this project' });
  }
});

// Serve static files (for React frontend)
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
