const ConfigManager = require('./index');

const config = new ConfigManager('./config.json'); // Example for tests

console.log(config.get('database.host')); // Should log the database host
