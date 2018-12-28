const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20')
    .Strategy;
const keys = require('../config/keys');
const User = require('../server/models').user;

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOrCreate({where: {googleId: profile.id}});
}));