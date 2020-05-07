const express = require('express');
const app = express();
const PORT = 3333;
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
