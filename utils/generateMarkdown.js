// returns license badge
function renderLicenseBadge(license){}

// returns license link
function renderLicenseLink(license){}

// returns license section of README 
function renderLicenseSection(license){}

// generate markdown for README
function generateMarkdown(answers){
    return `# ${answers.title}`;
}

module.exports = generateMarkdown;