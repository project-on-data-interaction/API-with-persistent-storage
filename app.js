/** @format */

//create first basic server
const express = require("express");

//connect mongoose package to the database
const mongoose = require("mongoose");

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

//routes
app.use(require("./routes/index"));

//server configurations
app.listen(3000, () =>
	console.log(
		"server started listening on port : 3000"
	)
);

/*const port = 3000;

app.get("/", (req, res) => {
	res.send("Is it working?");
});

app.listen(port, () => {
	console.log(
		`Example app listening on port ${port}`
	);
}); */
