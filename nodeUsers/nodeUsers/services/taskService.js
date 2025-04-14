const cliente = require('../config/db');

exports.getAllTasks = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('task').select('*');
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}