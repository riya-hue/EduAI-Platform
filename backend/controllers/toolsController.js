const { getSupportResponse } = require('../services/supportService');

async function getResponse(question) {
    const response = await getSupportResponse(question);
    return response;
}

module.exports = { getResponse };
