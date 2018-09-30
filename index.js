const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


// 587078935800-kttmenlro3auc1h6a1rj3e91f16k41d7.apps.googleusercontent.com client ID

// GyBfUISBfqqosXosxt3-CEE4 client secret!!!

passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);