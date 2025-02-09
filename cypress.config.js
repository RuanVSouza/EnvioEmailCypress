const { defineConfig } = require("cypress");
// Importe o nodemailer

const emailTasks = require('./cypress/tasks/email');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { // Registre o evento 'task' AQUI, dentro de setupNodeEvents
        enviaEmail: emailTasks.enviaEmail,
      });



    },
  },
});