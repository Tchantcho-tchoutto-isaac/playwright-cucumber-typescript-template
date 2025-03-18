module.exports = {
  default: {
    require: [
      "step-definitions/**/*.ts",
      "hooks/**/*.ts"
    ],
    
    format: [
      "allure-cucumberjs/reporter",
      "json:reports/allure-results.json",
      "html:reports/cucumber-report.html"
    ],
    tags: "",
    worldParameters: {
      baseUrl: "https://opensource-demo.orangehrmlive.com"
    },
    requireModule: ["ts-node/register"],
    timeout: 20000 // Augmenter le timeout à 20s (au lieu de 5000 ms)
  },
  snippets: true,
};
