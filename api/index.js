require('dotenv').config();

const express = require ('express');
const app=express();
const PORT= process.env.PORT || 4000;
const connectDB=require('../config/dbConnect');
const mongoose = require('mongoose');
var cors=require('cors');
const corsOptions=require('../config/corsOptions');
// console.log(PORT)

connectDB();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', require('../routes/userRoutes'));

app.use('/api/articles', require('../routes/articleRoutes'));
app.use('/api/tags', require('../routes/tagRoutes'));

app.use('/api/articles', require('../routes/commentRoutes'));

mongoose.connection.once('open',()=>{
  console.log('connected to mongodb');
});
app.listen(PORT,() =>{
  console.log(`Server is running on port ${PORT}`);
});



mongoose.connection.on('error',(err)=>{
  console.log("error while connecting ");
});

