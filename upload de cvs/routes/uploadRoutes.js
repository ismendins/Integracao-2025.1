const express = require('express');
const router = express.Router();
const uploadControl = require('../controllers/uploadController.js');


router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.post('/upload', uploadControl.uploadFunc);

module.exports = router;