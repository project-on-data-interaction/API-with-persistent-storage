/** @format */

//creating a new server listening at port 3000
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Port
const port = 3000;

//  setting up the middleware 'body-Parser'.
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.get("/", (req, res) => {
	res.json({
		message:
			"Hello Stranger! How are you?",
	});
});

// Listen
app.listen(port, () => {
	console.log(
		`Listening on port: ${port}`
	);
});
/*
const port = 3000;

app.get("/", (req, res) => {
	res.send("Is it working?");
});

app.listen(port, () => {
	console.log(
		`Example app listening on port ${port}`
	);
});

/*
//create first basic server
const express = require("express");

//connect mongoose package to the database
const mongoose = require("mongoose");
// This is to solve the cors security issue when running both server and the client apps locally
const cors = require("cors");

//initialize the app with express model
const app = express();

//connection to mongodb database
mongoose.connect(
	"mongodb://127.0.0.1:27017/todo-list",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

//middlewares
app.use(
	express.urlencoded({ extended: true })
);

// Serve static files from the 'public' directory
app.use(express.static("public"));

//set the template in engine
app.set("view engine", "ejs");

// This is to solve the cors security issue when running both server and the client apps locally
app.use(
	cors({
		origin: "*",
		credentials: true,
		allowedHeaders: ["Content-Type"],
	})
);

//routes
app.use(require("./routes/index"));

//server configurations
app.listen(3000, () =>
	console.log(
		"server started listening on port : 3000"
	)
); */
