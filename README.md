# Simple Config Manager

Simple Config Manager is a lightweight library designed to make managing application configuration straightforward and intuitive. It allows developers to load, validate, and access settings from various sources such as JSON, YAML, or environment variables with a minimalistic API.

## Features
- **Easy to Use**: A clean API for loading and accessing configuration values.
- **Multiple Formats**: Support for JSON, YAML, and environment variables to accommodate diverse preferences.
- **Validation**: Built-in validation to ensure that configuration values meet expected types and constraints.
- **Simple Overrides**: Ability to override default settings with environment variables for flexible deployment options.

## Installation
You can install the Simple Config Manager using npm:
```bash
npm install simple-config-manager
```

## Usage
```javascript
const ConfigManager = require('simple-config-manager');
const config = new ConfigManager('./config.json'); // Load from JSON file

// Accessing a value
const dbHost = config.get('database.host');
console.log(`Database Host: ${dbHost}`);
```

## Contributing
If you would like to contribute, please fork the repository and submit a pull request. Check the `CONTRIBUTING.md` for more details.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
