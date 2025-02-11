/** @type {import('prettier').Config} */
module.exports = {
    endOfLine: "lf",
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "es5",
    bracketSpacing: true,
    printWidth: 80,
    overrides: [
        {
            files: ["*.yaml", "*.yml"],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ["*.md", "*.mdx"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
