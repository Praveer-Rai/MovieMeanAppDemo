var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.host = 'localhost:27017';
Config.db.name = 'movieMeanAppDB';

// Use environment defined port or 3000
// Config.app.port = process.env.PORT || 3000;
Config.app.port = 4000;

Config.auth.jwtSecret = "alpha to beta";

module.exports = Config;