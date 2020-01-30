const modelos = require('../models')
const Personas = modelos.Personas;
const bcrypt = require('bcrypt');

function login(req, res){
    let correo = req.body.correo;
    let password = req.body.password;

    return Personas.findOne({where: {correo: correo}}).then(user => {
        if(!user) return res.status(404).send({message: 'Revisar bien el correo'});
        bcrypt.compare(password, user.password).then(match => {
            if(match) return res.status(200).send({message: 'Acceso'});
            return res.status(200).send({message: 'Contraseña incorrecta'});
        }).catch(error => {
            console.log(error);
            res.status(500).send({error});
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({error});
    })
}

module.exports = login;