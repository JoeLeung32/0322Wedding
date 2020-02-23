module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    root: true,
    extends: [
        // "airbnb",
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
    ],
    parser: 'babel-eslint',
    rules: {
        strict: 0,
        'linebreak-style': [0, 'windows'],
        'react/no-danger': 'off',
        'react/no-danger-with-children': 'error',
    },
    globals: {
        process: true,
        document: true,
        window: true,
        navigator: true,
    },
    settings: {
        'import/parser': 'babel-eslint',
    },
};
