const express = require('express');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./sequelize');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);


require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);