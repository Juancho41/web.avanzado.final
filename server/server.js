const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const comentariosRouter = require('./Routes/Comentarios');

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', comentariosRouter);


port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => {
        console.log(`Servidor funcionando en el puerto ${port}`)
    }))
    .catch((error) => {
        console.log(error.mesage)
    });



