module.exports = {
    env: {
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 2018,
        sourceType: 'module',
        extraFileExtensions: ['.json'],
    },
    plugins: ['prettier', 'import'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-floating-promises': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        indent: ['error', 4],
        'no-return-await': ['error'],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        'import/no-cycle': 2,
    },
};
