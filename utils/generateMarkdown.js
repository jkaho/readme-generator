// returns license badge
function renderLicenseBadge(license){
    if (license === 'Apache 2.0 License') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'ISC') {
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    } else {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
}

// returns license link
function renderLicenseLink(license){}

// returns license section of README 
function renderLicenseSection(license){}

// generate markdown for README
function generateMarkdown(answers){
    return `# ${answers.title}`;
}

module.exports = generateMarkdown;