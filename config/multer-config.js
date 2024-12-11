const express = require('express');
const multer = require('multer');

const router=express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports=upload;