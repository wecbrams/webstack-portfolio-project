// services/cryptoService.js
const axios = require('axios');

const getCryptoData = async (ids = '') => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: false,
          ids, // Comma-separated list of crypto IDs
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = { getCryptoData };
