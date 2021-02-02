// returns description section of README 
function renderDescriptionSection(description){
    if (description === undefined) {
        return '';
    } else {
        return `## Description
${description}`;
    }
}

// returns installation section of README 
function renderInstallationSection(installation){
    if (installation === undefined) {
        return '';
    } else {
        return `## Installation
${installation}`;
    }
}

// returns usage section of README 
function renderUsageSection(usage){
    if (usage === undefined) {
        return '';
    } else {
        return `## Usage
${usage}`;
    }
}

// returns contributing section of README 
function renderContributingSection(contributing){
    if (contributing === undefined) {
        return '';
    } else {
        return `## Contributing
${contributing}`;
    }
}

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
This application is covered under the ${license} license.
License link: ${renderLicenseLink(license)}
        `;
    }
}

// generate markdown for README
function generateMarkdown(data){
    return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderDescriptionSection(data.description)}
${renderInstallationSection(data.installation)}
${renderUsageSection(data.usage)}
${renderContributingSection(data.contributing)}
${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;