// Required libraries and files
const express = require('express');
const session = require('express-session');
const {json} = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');

// Server Config
const app = express();
const port = 3000;
app.use(cors());
app.use(json());

// Database Config
const massiveServer = massive.connectSync({
    connectionString: config.elephantSQL
});

app.set('db', massiveServer);
const db = app.get('db');
console.log(db);

db.create_table([], (err, result) => {
    console.log(result);
})

// Endpoints


app.listen(port, () => {console.log(`Listening on port ${port}`)});
