const express = require('express');
const router = express.Router();

// Sample user route
router.get('/test', (req, res) => {
  res.send('✅ User route is working!');
});

module.exports = router;
