/* eslint-disable no-unused-vars */
import js from '@eslint/js'
import globals from 'globals'
import airbnb from 'eslint-config-airbnb'
import airbnbHooks from 'eslint-config-airbnb/hooks'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import sonarjs from 'eslint-plugin-sonarjs'
import security from 'eslint-plugin-security'

export default [
  {
    ignores: ['dist', 'node_modules', 'build', '.vscode']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
      '@typescript-eslint': typescript,
      sonarjs,
      security
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:sonarjs/recommended',
      'plugin:security/recommended',
      'airbnb',
      'airbnb/hooks',
      'prettier'
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'import/prefer-default-export': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'sonarjs/no-duplicate-string': 'warn', // Cảnh báo khi có string trùng lặp
      'sonarjs/no-identical-functions': 'warn', // Cảnh báo khi có function giống nhau
      'security/detect-object-injection': 'warn', // Cảnh báo rủi ro object injection
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }
]
