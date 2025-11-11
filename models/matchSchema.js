const express = require('express');
const mongoose = require('mongoose');

const matchSchem = new mongoose.Schema({
    rounds:{
        required:true,
        type:Number
    },
    match_time:{
        required:true,
        type:String
    },
    total_match_time:{
        required:true,
        type:String
    },
    opponents:{
        type:String,
        required:true
    },
    results:{
        
    }
})

const match = mongoose.model('match', matchSchem);
module.exports= match;
