// returns license badge
function renderLicenseBadge(license){
    if (license === undefined){
        return '';
    } else {
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
}

// returns license link
function renderLicenseLink(license){
    if (license === undefined){
        return '';
    } else {
        if (license === 'Apache 2.0 License') {
            return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
        } else if (license === 'GNU GPLv3') {
            return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
        } else if (license === 'ISC') {
            return '[ISC](https://opensource.org/licenses/ISC)';
        } else {
            return '[MIT](https://opensource.org/licenses/MIT)';
        }
    }
}

// returns license section of README 
function renderLicenseSection(license){
    if (license === undefined){
        return '';
    } else {
        return `## License
        ${answers.license}
        License link: ${renderLicenseLink(license)}
        `;
    }
}

// generate markdown for README
function generateMarkdown(answers){
    return `# ${answers.title}
    ${renderLicenseBadge(answers.license)}

    ${renderLicenseSection(answers.license)}
    `;
}

module.exports = generateMarkdown;