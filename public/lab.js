const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;


const LabSchema = new mongoose.Schema({

    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    matricula: {type: String, required: true},
    materia: { type: String, required: true},
    dia_apartado: {type: String, required: true},
    turno: {type: String, required: true},
    id_lab: { type: String, required: true },
    hora_solicitada: { type: String, required: true },
    dia: { type: String, required: true }
},{collection: 'laboratorio_docente'});
module.exports = mongoose.model('lab', LabSchema);