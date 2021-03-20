const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Int32 } = require('bson');

const saltRounds = 10;


const UserSchema = new mongoose.Schema({

    /*nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    matricula: {type: Int32, required: true, unique:true},
    carrera: {type: String, required: true},*/
    correo: { type: String, required: true, unique: true },
    /*telefono: {type: String, required: true, unique:true},
    turno: {type: String, required: true},*/
    password: { type: String, required: true }
},{collection: 'Docentes'});

UserSchema.pre('save', function(next){
if(this.isNew || this.isModified('password')){
const document = this;

bcrypt.hash(document.password,saltRounds,(err, hashedPassword)=>{

    if(err){
        next(err);
    }else{
        document.password = hashedPassword;
        next();
    }

});

}else{
    next();
}

});

UserSchema.methods.PasswordVerification = function(candidatePassword, callback){

    bcrypt.compare(candidatePassword, this.password, function(err, same){
if(err){
    callback(err);
}else{
    callback(err,same);
}
    });

}

module.exports = mongoose.model('user', UserSchema);