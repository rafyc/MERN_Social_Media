// Configuration du serveur
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const { checkUser, requireAuth } = require('./middleware/auth.middleware');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// JWT
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// ROUTES
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// SERVER
// Utilisation de la variable d'environnement PORT
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
