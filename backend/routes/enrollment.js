const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, course } = req.body;
    res.json({ message: `Enrolled ${name} in ${course} successfully!` });
});

module.exports = router;
