const express = require('express');
const router = express.Router();

// Sample appointment route
router.get('/test', (req, res) => {
  res.send('✅ Appointment route is working!');
});

module.exports = router;
