/** @format */

//creating a new server listening at port 3000
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const { pool } = require("./queries");
// Port
const port = 3000;

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
		info: "Node.js, Express, and Postgres API",
	});
});

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

// Listen
app.listen(port, () => {
	console.log(
		`Listening on port: ${port}`
	);
});
