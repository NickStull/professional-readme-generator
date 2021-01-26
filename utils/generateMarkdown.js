const generateMarkdown = data => {
    return `# ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

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

    ## Questions

    If you have any questions about this repo, or if you would like to contribute to this project, you can contact me directly at ${data.email}. 
    You can also find more of my work at [${data.username}](https://github.com/${data.username}/)!
    
    `;
};

module.exports = generateMarkdown;