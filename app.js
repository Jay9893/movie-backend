require('dotenv').config();
const express = require('express');
const moviesRouter = require('./routes/movies');
var cors = require('cors')
const userRouter = require("./routes/user")
const connectToDatabase = require('./db/connection');
const app = express();

app.use(express.json());
app.use(cors())

// Add more routes and configurations as needed

// Connect to the database
connectToDatabase();

const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("helelo ")
})
app.use('/api/movies', moviesRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
