const path = require('path');

module.exports = {
  default: {
    requireModule: ["ts-node/register"],  // Active TypeScript
    require: [
      "step-definitions/**/*.ts",   // Path vers les fichiers step-definitions
      "hooks/**/*.ts"               // Path vers les hooks
    ],
    format: [
      "json:reports/cucumber-report.json", // JSON report
      "html:reports/cucumber-report.html"  // HTML report
    ],
    paths: ["features/**/*.feature"], // Assure que les fichiers .feature sont bien inclus
    tags: "",  // Filtre les scénarios avec @post
    worldParameters: {           
      baseUrl: "http://192.168.1.95:9091/admin/login/"  // Définition d'un paramètre global
    },
    timeout: 10000, // Timeout des tests (10s)
  }
};
