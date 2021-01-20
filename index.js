const express = require('express'),
http = require('http');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/users',require('./routes/api/users'))
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


