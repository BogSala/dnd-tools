import pluginVue from 'eslint-plugin-vue'

export default [
    ...pluginVue.configs['flat/essential'],

    {
        files: ['**/*.js', '**/*.vue'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly'
            }
        },
        rules: {
            'semi': ['error', 'never'],
            'quotes': ['error', 'single'],
            'no-unused-vars': 'warn',
            'vue/multi-word-component-names': 'warn',
        }
    },
    {
        ignores: ['dist/', 'node_modules/', 'vite.config.js']
    }
]