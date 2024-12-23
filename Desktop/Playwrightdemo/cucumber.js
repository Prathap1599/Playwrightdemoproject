const common = `
    --require C:/Users/user-001/Desktop/Playwrightdemo/setup/hooks.js
    --require stepdefinition/**/*.js
    --require config
    --require package.json
    --require playwright.config.js
    --format summary
    --format @cucumber/pretty-formatter
    --format html:report_cucumber/cucumber.html
    --format json:report_cucumber/cucumber.json
`;

const featurefiles = [
    'C:/Users/user-001/Desktop/Playwrightdemo/feature/login.feature'
];

module.exports = {
    common,
    featurefiles
};
