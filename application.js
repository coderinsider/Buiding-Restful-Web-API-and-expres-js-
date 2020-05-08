const express = require('express');
const routes = require('./src/routes/crmRoutes');
const app = express();
const mongoose = require('mongoose');
const PORT = 3333;
const bodyParser = require('body-parser');
// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb'{
    useMongoClient: true,
});
// body parser setup
app.use(bodyParser.urlencoded({extends: true})
app.use(bodyParser.json());
routes(app);
app.get(
    '/',
    (req, res, next) => {
        console.log(`You code working on current / directory`);
        next();
    },
    (req, res) => {
        res.send('Hello Greeting');
    }
);

const server = app.listen(PORT, (req, res) => {
    console.log(
        `Your server running on http://127.0.0.1:${server.address().port}`
    );
});
