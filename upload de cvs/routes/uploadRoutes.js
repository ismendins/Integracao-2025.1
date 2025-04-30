const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadControl = require('../controllers/uploadController.js');

const upload = multer({dest :'upload/'});

router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.post('/upload', upload.single('file'), uploadControl.uploadFunc);

module.exports = router;