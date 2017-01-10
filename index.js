// Required libraries
const express = require('express');
const session = require('express-session');
const {json} = require('body-parser');
const cors = require('cors');
const massive = reuire('massive');

// Server Config
const app = express();
const port = 3000;
app.use(cors());
app.use(json());

// Database Config
const massiveServer = massive.connectSync({
    connectionString: confg.elephantSQL
});

app.set('db', massiveServer);
const db = app.get('db');

// Endpoints


app.listen(port, () => {console.log(`Listening on port ${port}`)});
