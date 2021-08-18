const { Router } = require('express');

const api = Router();

api.get('', (req, res) => {
    res.send('hello there! welcome to the API');
});

module.exports = {
    api,
}