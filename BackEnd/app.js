const express=require('express');
const app=express();
require('dotenv').config({path:"BackEnd/config/config.env"});
const dbConnection=require('./config/dbConnect');
dbConnection();
module.exports=app;