let badge = "";
let link = "";
let markDownTOC = "";
let markDownSec

const renderLicenseInfo = license => {
    switch (license) {
        case "MIT": badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            link = "https://opensource.org/licenses/MIT";
            markDownTOC = "* [License](#license)";
            markDownSec = "## License\nThis application is covered under the MIT license. You can find more information here:";
            break;
        case "BSD 3": badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            link = "https://opensource.org/licenses/BSD-3-Clause";
            markDownTOC = "* [License](#license)";
            markDownSec = "## License\nThis application is covered under the BSD 3 license. You can find more information here:"; 
            break;
        case "The Unlicense": badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            link = "http://unlicense.org/";
            markDownTOC = "* [License](#license)";
            markDownSec = "## License\nThis application is covered under The Unlicense. You can find more information here:"; 
            break;
        case "WTFPL": badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
            link = "http://www.wtfpl.net/about/";
            markDownTOC = "* [License](#license)";
            markDownSec = "## License\nThis application is covered under the WTFPL license. You can find more information here:";  
            break;
        default: badge = "";
            link = "";
            markDownTOC = "";
            markDownSec = "";
            break;
    }
}

const generateMarkdown = data => {

    renderLicenseInfo(data.license);

    return `
# ${data.title}

${badge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

${markDownTOC}

* [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command(s):

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

${markDownSec}

${link}

## Questions

If you have any questions about this repo, or if you would like to contribute to this project, you can contact me directly at ${data.email}.

You can also find more of my work at [GitHub](https://github.com/${data.username}/)!

`;
};

module.exports = generateMarkdown;