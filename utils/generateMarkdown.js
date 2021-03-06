// returns description section of README 
function renderDescriptionSection(description){
    if (description === undefined) {
        return '';
    } else {
        return `## Description
${description}`;
    }
}

// returns table of contents section of README 
function renderTableOfContents(content){
    let tableOfContents = "## Table of Contents";
    content.forEach(section => {
        if (section !== 'Description' && section !== 'Table of Contents'){
            tableOfContents += `\n- [${section}](#${section})`;
        }
    })
    tableOfContents += `\n- [Questions](#Questions)`;
    return tableOfContents;
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

// returns tests section of README 
function renderTestsSection(tests){
    if (tests === undefined) {
        return '';
    } else {
        return `## Tests
${tests}`;
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
            return '(https://opensource.org/licenses/Apache-2.0)';
        } else if (license === 'GNU GPLv3') {
            return '(https://www.gnu.org/licenses/gpl-3.0)';
        } else if (license === 'ISC') {
            return '(https://opensource.org/licenses/ISC)';
        } else {
            return '(https://opensource.org/licenses/MIT)';
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
For more information, [click here]${renderLicenseLink(license)}.`;
    }
}

// returns Github link
function renderGitHubLink(github){
    if (github === undefined) {
        return '';
    } else {
        return `**My GitHub Profile**: [${github}](https://github.com/${github})`;
    }
}

// returns email address
function renderEmail(email){
    if (email === undefined) {
        return '';
    } else {
        return `If you have any further questions, please email me at [${email}](mailto:${email}).`;
    }
}

// returns questions section of README 
function renderQuestionsSection(github, email){
    if (github === undefined || email === undefined) {
        return '';
    } else {
        return `## Questions
${renderGitHubLink(github)}

${renderEmail(email)}`;
    }
}

// generates markdown for README
function generateMarkdown(data){
    return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderDescriptionSection(data.description)}
${renderTableOfContents(data.content)}
${renderInstallationSection(data.installation)}
${renderUsageSection(data.usage)}
${renderContributingSection(data.contributing)}
${renderTestsSection(data.tests)}
${renderLicenseSection(data.license)}
${renderQuestionsSection(data.github, data.email)}`;
}

module.exports = generateMarkdown;