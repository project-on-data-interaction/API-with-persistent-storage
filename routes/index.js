/** @format */
/** @format */

//this will help us to create different routes
const router =
	require("express").Router();

//importing the Todo model
const Todo = require("../models/Todo");
//routes will be here
//home page route

router.get("/", async (req, res) => {
	//this line will give all the data present in our database
	const allTodo = await Todo.find();
	res.json(allTodo);
	//sending all the data that we received from the database to the index
});

//exporting the router
module.exports = router;
