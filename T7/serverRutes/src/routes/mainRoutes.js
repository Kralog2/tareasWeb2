const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});
router.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'calculadora', 'pagina1.html'));
});

router.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'carrito', 'pagina1.html'));
});

router.get('/compara', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'compara', 'pagina2.html'));
});
module.exports = router;