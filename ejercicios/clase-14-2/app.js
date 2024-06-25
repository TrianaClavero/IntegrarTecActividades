const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//404
app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
