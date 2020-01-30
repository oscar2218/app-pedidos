const express = require('express');
const app = express();
const port = 3002;
const bodyParser = require('body-parser');
const modelos = require('./models/');
const Personas = modelos.Personas;
const Productos = modelos.Productos;
const Pedidos = modelos.Pedidos;
const sequelize = require('sequelize');
const authContrl = require('./controladores/authLogin');
const Router = express.Router();
const multer = require('multer');
// const upload = multer({dest: 'uploads/'});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        console.log(file);
        let filetype = '';
        if(file.mimetype === 'image/gif'){
            filetype = 'gif';
        }
        if(file.mimetype === 'image/png'){
            filetype = 'png';
        }
        if(file.mimetype === 'image/jpeg'){
            filetype = 'jpg';
        }
        cb(null, 'image-' + Date.now() + '.' + filetype);
    }
})
var upload = multer({storage: storage});

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());
app.use(bodyParser.json({ limit: '100mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

//GET PERSONAS
app.get("/api/todo", (req, res) => {
    Personas.findAll().then(per => {
        res.json(per.sort(function(c1, c2){return c1.id - c2.id}));
    }).catch(err => {
        console.log(err);
        res.status(500).json({messaje: "error", detalles: err});
    })
})

//GET PEDIDOS
app.get("/api/pedidos", (req, res) => {
    Pedidos.findAll().then(ped => {
        res.json(ped.sort(function(c1, c2){return c1.id - c2.id}));
    }).catch(err => {
        console.log(err);
        res.status(500).json({messaje: "error", detalles: err});
    })
})

//GET PRODUCTOS
app.get("/api/productos", (req, res) => {
    Productos.findAll().then(prod => {
        res.json(prod.sort(function(c1, c2){return c1.id - c2.id}));
    }).catch(err => {
        console.log(err);
        res.status(500).json({messaje: "error", detalles: err});
    })
})

//POST PERSONA REGISTRO
app.post("/api/persona", (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let correo = req.body.correo;
    let telefono = req.body.telefono;
    let password = req.body.password;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        password = hash;
        console.log(password)
        Personas.create({
            nombre : nombre,
            apellido : apellido,
            correo : correo,
            telefono : telefono,
            password : password}).then(data => {
            res.send({mensaje : `El usuario ha sido creado`});
        });
    });
})

//POST PERSONA LOGIN
app.post('/api/login', authContrl);

//POST AGREGAR PRODUCTO
app.post("/api/producto", upload.single('imagen'), (req, res, next) => {
    Productos.create(req.body).then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Producto creado',
            data: result
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

// //POST INSERTAR IMAGEN
// app.post('/api/addImagen', (req, res) => {

// })

app.listen(port, () => {
    console.log(`El servidor se ejecuta en el puerto ${port}`)
})

module.exports = Router;
// .create(req.body).then(data => {
//     res.send(data.dataValues);