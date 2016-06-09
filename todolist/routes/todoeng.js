var pgp = require('pg-promise')();
var pgCn = require('./pg-config.js').getConnObj();

var todoeng = {
	createItem: function(req, res) {
		// tomamos y verificamos que se estan enviando datos
		var description = req.body.description;
		if (description != '') {
			res.status(204);
			res.json({
				"status": 204,
				"message": "No data sended"
			});
			return;
		}

		// creamos una conexcion con la base de datos
		var db = pgp(pgCn);

		var query = "INSERT INTO items (descripcion, fecha_creacion) values ($1, now()) returning item_id";

		db.one(query, [decription])
			.then(function(data) {
				res.status(200);
				res.json({
					"status": 200,
					"message": "Insercion exitosa",
					"data": data.item_id
				});
			})
			.catch(function(err) {
				console.log("ERROR: ", err);
				res.status(401);
				res.json({
					"status": 401,
					"message": err
				});
			});
	},
	getItems: function(req, res) {
		var db = pgp(pgCn);

		var query = "SELECT item_id, descripcion, hecho FROM items";
		var items = [];

		db.many(query)
			.then(function(data) {
				data.forEach(function(item) {
					items.push({"id": item.item_id, "description": item.descripcion, "done": item.hecho});
				});
				res.status(200);
				res.json(items);
			})
			.catch(function(err) {
				console.log(err);
				res.send(400);
				res.json({
					"status": 400,
					"message": err
				});
			});
	},
	changeState: function(req, res) {
		var item_id = req.params.id;
		var db = pgp(pgCn);

		var query = "UPDATE items SET hecho = (select not(hecho) from items where item_id = $1) where item_id = $1";


		db.none(query, item_id)
			.then(function(data) {
				res.status(200);
				res.json({
					"status": 200,
					"message": "updated successfully"
				});
			})
			.catch(function(err) {
				res.status(401);
				res.json({
					"status": 401,
					"message": err
				});
			});
	},
	deleteItem: function(req, res) {
		var item_id = req.params.id;
		var db = pgp(pgCn);

		var query = "DELETE items WHERE item_id = $1";


		db.none(query, item_id)
			.then(function(data) {
				res.status(200);
				res.json({
					"status": 200,
					"message": "delete successfully"
				});
			})
			.catch(function(err) {
				res.status(401);
				res.json({
					"status": 401,
					"message": err
				});
			});
	}
};

module.exports = todoeng;
