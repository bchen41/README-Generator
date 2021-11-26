// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = `![badge](https://img.shields.io/badge/license-${license}-blue)<br/>`;
  if (license === "None") {
    licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    None: "",
    Apache: "https://opensource.org/licenses/Apache-2.0",
    BSD3: "https://opensource.org/licenses/BSD-3-Clause",
    BSD2: "https://opensource.org/licenses/BSD-2-Clause",
    GPL: "https://opensource.org/licenses/gpl-license",
    LGPL: "https://opensource.org/licenses/lgpl-license",
    MIT: "https://opensource.org/licenses/MIT",
    MPL: "https://opensource.org/licenses/MPL-2.0",
    EPL: "https://opensource.org/licenses/EPL-2.0",
    CDDL: "https://opensource.org/licenses/CDDL-1.0",
  };
  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = `## License
  ![badge](https://img.shields.io/badge/license-${license}-blue)
  <br/>
  This application is covered by the ${license} license.`;
  if (license === "None") {
    licenseSection = "";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  let TOC = `## Table of Contents
  - [Installations](#installations)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`;

  if (data.tableContents === false) {
    TOC = "";
  }

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ${TOC}

  ## Installations
  ${data.installations}

  ## Usage
  ${data.usage}
  <br/>
  ### Screenshot of Project
  <br/>
  <img src="${data.screenshot}" alt="Screenshot of ${data.title}"/>

  ${licenseSection}
  <br/>
  Click [here](${licenseLink}) to be directed to the license link.

  ## Contributing
  ${data.contribution}
  <br/>
  Click [here](https://www.contributor-covenant.org/) for industry standard guidelines.

  ## Tests
  ${data.tests}

  ## Questions
  For additional questions, contact me by reaching me at my [email](mailto:${data.email}).
  <br/>
  You can find my other projects at my [GitHub](https://github.com/${data.github}) profile.`;
}

module.exports = generateMarkdown;
