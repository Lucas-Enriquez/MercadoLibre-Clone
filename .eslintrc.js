module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: [2, 'space'],
		'no-tabs': 0,
		'react/react-in-jsx-scope': 'off',
		'dot-notation': 0,
		'no-mixed-spaces-and-tabs': 0
	}
}
