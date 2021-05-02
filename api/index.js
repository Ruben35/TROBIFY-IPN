
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/auth');
const inmuebleRouter = require('./routes/inmuebles');
const agenciaRouter = require('./routes/agencia');
const path = require('path');
const app = express();

app.use( cors() );
app.use(express.json());

app.use('/uploads',express.static(path.resolve('uploads')));

app.use('/auth',authRouter);
app.use('/inmueble',inmuebleRouter);
app.use('/agencia',agenciaRouter);

app.listen(process.env.PORT,() =>{
    console.log(`corriendo en puerto: ${process.env.PORT}`);
})
