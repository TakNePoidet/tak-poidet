module.exports = {
	extends: ['@taknepoidet-config/eslint-config'],
	rules: {
		'vue/no-v-model-argument': 0,
		'vue/multi-word-component-names': 0,
		'vue/no-v-for-template-key': 0,
		'import/extensions': [
			'error',
			'always',
			{
				jsx: 'never',
				js: 'never',
				ts: 'never',
				tsx: 'never'
			}
		],
		'max-len': [
			'error',
			{
				code: 150,
				tabWidth: 4,
				ignoreUrls: true
			}
		]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.scss', '.sass', '.ts', '.js', '.tsx', '.jsx']
			},
			typescript: {
				project: ['tsconfig.json']
			}
		}
	}
};
