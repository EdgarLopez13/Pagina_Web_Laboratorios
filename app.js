const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const app        = express();
const User       = require('./public/docentes');
const bcrypt     = require('bcrypt');
const mongoose   = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

const mongo_uri = 'mongodb://localhost/laboratorio_utn';


mongoose.connect(mongo_uri,function(err){
if (err) {
    throw err;
} else {
    console.log('Conexion Exitosa con ' + mongo_uri);
}
});


app.post('/registro',(req,res)=>{

const {nombres,apellidos,matricula,carrera,correo,telefono,turno,password} = req.body;

const user = new User({nombres,apellidos,matricula,carrera,correo,telefono,turno,password});
   
user.save(err =>{
if (err) {
    res.status(500).send('ERROR AL REGISTRARSE');
}else{
    res.status(200).send('USUARIO REGISTRADO');
}

});

});

app.post('/autenticacion', (req, res) =>{

    const {correo, password} = req.body;

    user.findOne({correo}, (err, user) =>{

        if (err) {
            res.status(500).send('ERROR AL AUNTETICARSE EL CORREO');
}else if(!user){
    res.status(200).send('EL USUARIO NO EXISTE');
}else{

    user.PasswordVerification(password, (err, result) =>{
        if (err) {
            res.status(500).send('ERROR AL AUNTETICARSE LA CONTRASEÑA');
        }else if (result) {
            res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');  
        }else{
            res.status(500).send('CORREO Y/O CONTRASEÑA INCORRECTAS');
        }
    });
}
    });

});



app.listen(3000,()=>{
    console.log('Server Started');

});

module.exports = app;