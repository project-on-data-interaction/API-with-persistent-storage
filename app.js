/** @format */

//creating a new server listening at port 3000
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

const { pool } = require("./queries");
var cors = require("cors");
app.use(cors());

// Port
const port = 3005;

//  setting up the middlewares
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.get("/", (request, response) => {
	response.json({
		info: " it's working",
	});
});

//Getting all the to-do items from the database.
app.get(
	"/todos",
	(request, response) => {
		pool.query(
			"SELECT * FROM to_do_list ORDER BY id ASC",
			(error, results) => {
				if (error) {
					throw error;
				}
				response
					.status(200)
					.json(results.rows);
			}
		);
	}
);

//Adding a new to-do item to the list

app.post(
	"/todos",
	(request, response) => {
		let data = request.body;
		{
			const { completed, activity } =
				request.body;

			pool.query(
				"INSERT INTO to_do_list (completed, activity) VALUES ($1, $2) RETURNING *",
				[completed, activity],
				(error, results) => {
					if (error) {
						throw error;
					}
					response
						.status(200)
						.json(results.rows[0]);
				}
			);
		}
	}
);

//Deleting a todo item from the list
app.delete(
	"/todos/:id",
	(request, response) => {
		console.log(request.params.id);
		let id = parseInt(
			request.params.id
		);
		{
			pool.query(
				"DELETE FROM to_do_list WHERE id = $1",
				[id],
				(error, results) => {
					if (error) {
						throw error;
					}
					response
						.status(200)
						.send(
							`To-do activity deleted with ID: ${id}`
						);
				}
			);
		}
	}
);

//update data : mark the completed activities in the to-do list
app.put(
	"/todos/:id",
	(request, response) => {
		console.log(request.params.id);
		let id = parseInt(
			request.params.id
		);
		const { completed } = request.body;
		{
			pool.query(
				"UPDATE to_do_list SET completed =  $1 WHERE id = $2",
				[completed, id],
				(error, results) => {
					if (error) {
						throw error;
					}
					response
						.status(200)
						.send(
							`To-do activity marked as completed with ID: ${id}`
						);
				}
			);
		}
	}
);
// Listen
app.listen(port, () => {
	console.log(
		`Listening on port: ${port}`
	);
});
