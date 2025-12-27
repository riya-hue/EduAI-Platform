const express = require('express');
const router = express.Router();
const { getResponse } = require('../controllers/toolsController');

router.post('/', async (req, res) => {
    const { question } = req.body;
    try {
        const answer = await getResponse(question);
        res.json({ answer });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
