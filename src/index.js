class ConfigManager {
    constructor(configPath) {
        this.config = {};
        this.loadConfig(configPath);
    }

    loadConfig(configPath) {
        const fs = require('fs');
        const path = require('path');
        const ext = path.extname(configPath);

        if (ext === '.json') {
            this.config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        } else if (ext === '.yaml' || ext === '.yml') {
            const yaml = require('js-yaml');
            this.config = yaml.load(fs.readFileSync(configPath, 'utf-8'));
        } else {
            throw new Error('Unsupported config file format.');
        }
    }

    get(key) {
        return key.split('.').reduce((o, i) => o[i], this.config);
    }

    validate(schema) {
        // Simple validation logic can be added based on schema
        // This is a placeholder for demonstration purposes
    }
}

module.exports = ConfigManager;
