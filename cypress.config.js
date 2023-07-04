const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome', //for html report
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
