const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  retries: {
    runMode: 1,
  },
  projectId: 'a5zbka',
  e2e: {
    setupNodeEvents(on, config) {


      // You can add additional setup if needed...
      return config;
    },
    specPattern: 'cypress/e2e/**/*.js',
    // specPattern: 'cypress/e2e/examples/BBD/**/*.feature',
  },
});
