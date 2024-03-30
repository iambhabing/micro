const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Coming March 31');
});

app.listen(process.env.PORT || 3000);
require('child_process').exec('npm i express')
