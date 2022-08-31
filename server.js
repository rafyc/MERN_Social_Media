// Configuration du serveur
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ROUTES
app.use('/api/users', userRoutes);

// SERVER
// Utilisation de la variable d'environnement PORT
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
