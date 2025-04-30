const supabase = require('../config/db');
const csv = require('csv-parser');
const fs = require('fs');
//const path = require('path');

const uploadFunc = async (req, res) => {
   const filePath = req.file.path;
   const results = [];

   fs.createReadStream(filePath)
   .pipe(csv())
   .on('data', (data)=> results.push(data))
   .on('end', async ()=> {
    try{
        const {data, error } = await supabase.from('usuario').insert(results);
        if (error){
            console.log(error);
            return res.status(500).send("Erro de inserção de dados no supabase");
        }
        console.log('Upload realizado com sucesso. ', data)
    } catch (err){
        console.log(err);
        res.status(500).send("Erro interno");
    } finally {
        fs.unlinkSync(filePath);
    }
   }) 
};

module.exports = { uploadFunc };