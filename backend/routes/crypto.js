// routes/crypto.js
const express = require('express');
const router = express.Router();
const { getCryptoData } = require('../services/cryptoService');
const auth = require('../middleware/auth');

// Get cryptocurrency data
router.get('/', auth, async (req, res) => {
  const { ids } = req.query; // Optional: filter by specific IDs
  const data = await getCryptoData(ids);
  res.json(data);
});

module.exports = router;
