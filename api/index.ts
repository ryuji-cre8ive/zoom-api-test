'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
const rq = require('request-promise');
const jwt = require('jsonwebtoken');
const RoomCreation = require('./lib/SendToZoom')

require('dotenv');

app.use(cors());

// rq(option).then(function(res:any){
//   console.log(res);
// })

app.get('/createurl', async(req:any, res:any) => {
  try{
    const roomURL = await RoomCreation();
    res.send(roomURL);
  } catch (err) {
    console.error('error has occured')
  }
  
});

module.exports = {
  path: '/api',
  handler: app
}