const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20')
    .Strategy;
const keys = require('../config/keys');
const User = require('../server/models').user;

passport.serializeUser((user, done) => {
    console.log('SERIALIZING USER');
    console.log(user);
    console.log(user.id);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log('DESERIALIZING USER');
    console.log(id);
    User.findByPk(id)
        .then((user) => {
            console.log('USER FOUND');
            console.log(user);
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOrCreate({where: {googleId: profile.id}})
        .then((user) => {
            done(null, user);
        });
}));