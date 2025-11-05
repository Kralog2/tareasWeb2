const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const mainRoutes = require('./routes/mainRoutes');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//rutas
app.use('/', mainRoutes);

//Puerto
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});