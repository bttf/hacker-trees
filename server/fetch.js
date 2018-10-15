const _fetch = require('node-fetch');

module.exports = async (url) => {
  const rawResponse = await _fetch(url);
  return rawResponse.json();
};
