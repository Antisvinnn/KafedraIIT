const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@components': 'src/components',
		'@assets': 'src/assets',
		'@pages': 'src/pages',
		'@redux': 'src/redux',
		'@helper': 'src/helper',
		'@variables': 'src/variables',
		'@helpers': 'src/helpers',
	})(config);

	return config;
};
