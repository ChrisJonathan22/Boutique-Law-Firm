const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const port = 3000;

app.use(favicon(path.join(__dirname, '../public/img', 'logo.ico')));
app.use(express.static('../public'));


app.get('/boutiquelawfirm', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port);
