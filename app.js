const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const app        = express();
const User       = require('./public/docentes');
const Lab       = require('./public/lab');
const bcrypt     = require('bcrypt');
const mongoose   = require('mongoose');
let alert        = require('alert');
const Materia    = require('./public/Materia');
const fetch      = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

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
    alert('ERROR AL REGISTRARSE');
    
}else{
    res.redirect("login.html");
    alert('USUARIO REGISTRADO');
}

});

});

app.post('/laboratorio',(req,res)=>{

    const {nombres,apellidos,matricula,materia,dia_apartado,turno,id_lab,hora_solicitada,dia} = req.body;
    
    const lab = new Lab({nombres,apellidos,matricula,materia,dia_apartado,turno,id_lab,hora_solicitada,dia});
       
    lab.save(err =>{
    if (err) {
    
        alert('ERROR AL REGISTRAR LA SOLICITUD');
        
    }else{
        res.redirect("courses.html");
        alert('SOLICITUD REGISTRADA');
      
    }
    
    });
    
    });
    

    

app.post('/autenticacion', (req, res) =>{

    const {correo, password} = req.body;

    User.findOne({correo}, (err, user) =>{

        if (err) {
            res.redirect("login.html");
            alert('ERROR AL AUNTETICARSE EL CORREO');
            
}else if(!user){
    res.redirect("login.html");
   alert('EL USUARIO NO EXISTE');
   
}else{

    user.PasswordVerification(password, (err, result) =>{
        if (err) {
            res.redirect("login.html");
            alert('ERROR AL AUNTETICARSE LA CONTRASEÑA');
          
        }else if (result) {
            alert("Usuario Autenticado Correctamente"); 
            res.redirect("Formulario_laboratorio.html");
          
        }else{
            res.redirect("login.html");
            alert('CORREO Y/O CONTRASEÑA INCORRECTAS');
           
        }
    });
}
    });

});


app.get('/calendario', (req, res) =>{
    
   Materia.find({
       
   }).then(doc =>{res.json({doc})})


   });

   app.post('/solicitud', (req, res) =>{
    const {correo, password} = req.body;
    
    User.find({correo:correo,password:password
        
    }).then(doc =>{res.json({doc})})
    
 
    });



app.listen(3000,()=>{
    console.log('Server Started');

});

module.exports = app;