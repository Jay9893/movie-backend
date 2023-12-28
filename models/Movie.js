const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
  image: { 
    data: Buffer,
    contentType: String,
    name:String
  },
  title: { type: String },
  publishingYear: { type: String },
}, {
  timestamps: true
});

// Check if the model already exists to avoid redefining
const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

module.exports = Movie;
