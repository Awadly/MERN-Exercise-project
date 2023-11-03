const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');


require('dotenv').config();

const app= express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.Atlas_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Mongo DB connected");
    })
    .catch((error) => {
      console.error("Mongo DB connection error:", error);
    });
app.listen(port, () => {
    console.log(`Server is  running on port: ${port}`);
});