/** @format */

//require mongoose
const mongoose = require("mongoose");

//create Todo schema
const TodoSchema = new mongoose.Schema({
	todo: {
		type: String,
		required: true,
	},
});

//in order to use it in other files you need to export it
module.exports = new mongoose.model(
	"Todo",
	TodoSchema
);
