const express = require('express');
const keys = require('./config/keys');
require('./sequelize');
const ManagementClient = require('auth0').ManagementClient;


const app = express();

const auth0 = new ManagementClient({
    domain: 'dev-gk1npnde.eu.auth0.com',
    clientId: 'a6uoCdWsnfgC0NSwc90dhSt8rTFl4SSl',
    clientSecret: keys.auth0SecretKey,
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT);