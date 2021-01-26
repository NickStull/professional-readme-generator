const generateMarkdown = data => {
    return `# ${data.title}\n
    \n## Description\n
    \n${data.description}
    \n## Table of Contents\n
    \n## Installation\n
    \nTo install the necessary dependencies, run the following command(s):\n
    \n\`\`\`\n
    ${data.installation}
    \n\`\`\`\n
    \n## Usage\n
    \n${data.usage}
    \n## Contributing\n
    \n${data.contributing}\n
    \n## Tests\n
    \nTo run tests, run the following command:\n
    \n\`\`\`\n
    ${data.tests}
    \n\`\`\`\n
    \n## Questions\n
    \n If you have any questions about this repo, 
    or if you would like to contribute to this project,
    you can contact me directly at ${data.email}. 
    You can also find more of my work at 
    [${data.username}](https://github.com/${data.username}/)!\n
    \n
    `;
};

module.exports = generateMarkdown