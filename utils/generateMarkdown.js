// function to generate markdown for README
function generateMarkdown(data, github) {
  return `
  
  # **${data.title}**

  ${data.badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Repository](#Repository)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Contact Author](#Contact)

  ## Repository

  - [Project Repo](${data.repo})

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Contact Author

  - <${github.email}>
  - ${github.name}
  - [GitHub Profile](${github.profile})

`;
}

module.exports = generateMarkdown;
