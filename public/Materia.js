const mongoose = require('mongoose');



const LabSchema = new mongoose.Schema({

   
    materia: { type: String, required: true}
    
},{collection: 'laboratorio_docente'});
module.exports = mongoose.model('materia', LabSchema);