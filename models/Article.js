var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subhead: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: true
  },
  articleSource: {
    type: String,
    require: true
  },
  favorited: {
    type: Boolean,
    default: false,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
