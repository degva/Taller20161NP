var express = require('express');
var router = express.Router();

/* Libreria para las funciones REST */
// Aun no creada
// var todoeng = require('./todoeng.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* ROUTER */
// Crear un item
router.post('/api/v1/items', todoeng.createItem);
// Obtener todos los items
router.get('/api/v1/items', todoeng.getItems);
// actualizar un item (ponerlo como hecho)
route.update('/api/v1/items/:id', todoeng.changeState);
// eliminar un item
route.delete('/api/v1/items/:id', todoeng.deleteItem);

module.exports = router;
