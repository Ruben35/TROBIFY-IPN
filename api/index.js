
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/auth');

const app = express();

app.use( cors() );
app.use(express.json());


//rutas

app.use('/auth',authRouter);



app.listen(process.env.PORT,() =>{
    console.log(`corriendo en puerto: ${process.env.PORT}`);
})
