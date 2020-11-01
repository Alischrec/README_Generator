// function to generate markdown for README
function generateMarkdown(data) {
  let license = ''

  switch (data.license) {
    case 'MIT':
      license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'ISC':
      license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      break;
    case 'Apache 2.0':
      license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GPL v3':
      license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
  }
  return `
  # ${data.title}
  
  ${license}

  Explore the [Project Page](https://github.com/${data.username}/${data.projectName})
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)

  ## Description: 
  ${data.describe} 
  
  ## Installation:
  ${data.install}

  ## Usage:
  ${data.usage}

  ## Contributing:
  ${data.contribute}

  ## Tests:
  ${data.testing}

  ## License:
  This project is covered under the following license: 
  ${license}

  ## Questions:
  [GitHub Profile](https://github.com/${data.username})
  
  If you have any questions, please reach out to me via email at 
  * <${data.email}>
  
  `;
}

module.exports = generateMarkdown;
