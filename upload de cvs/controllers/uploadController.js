const supabase = require('../config/db');

const uploadFunc = async (req, res) => {
    res.send('Hello World!');
};

module.exports = { uploadFunc };