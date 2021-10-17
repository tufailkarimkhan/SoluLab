const mongoose = require("mongoose");

const category = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("category", category);
