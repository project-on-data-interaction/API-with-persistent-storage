/** @format */

//setting up the configuration of postgreSQL connection
const Pool = require("pg").Pool;
const pool = new Pool({
	user: "hyper",
	host: "104.199.12.40",
	database: "sammani",
	password: "Rox6kTdcxcRzPeEWB6Ff",
	port: 5432,
});

module.exports = { pool };
