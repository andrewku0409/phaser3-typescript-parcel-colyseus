module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 2,
		'@typescript-eslint/ban-ts-ignore': 2,
		'@typescript-eslint/no-namespace': 2,
		'@typescript-eslint/member-delimiter-style': 2,
		'@typescript-eslint/no-explicit-any': 2,
		"quotes": "off",
		"@typescript-eslint/quotes": ["error", "single"],
		"@typescript-eslint/interface-name-prefix": ["error", {
			"prefixWithI": "always"
		}]
	}
}