module.exports = function (config) {
	config.set({
		
		basePath: '../',
		
		frameworks: ['jasmine'],
		
		colors: true,
		
		// Which plugins to enable
		plugins: [
			"karma-phantomjs-launcher",
			"karma-jasmine"
		],

		files: [
			'scripts/**/*.js',
			'tests/**/*.spec.js'
		],

		browsers: [
			'PhantomJS'
		],

		singleRun: true,
	
	});
};