const express = require('express');
const server = express();
const dotenv = require('dotenv');
const route = require('express').Router();
dotenv.config({ path: __dirname + "/env/" + process.env.NODE_ENV + ".env" });

const user = process.env.NAME_USER;
const pass = process.env.PASSWORD_USER;

server.get('/',(req,res)=>{
    res.json(`Hola mi user es: ${user} y mi password es: ${pass}`)
});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`server runnin on http://localhost:${PORT}`);
})