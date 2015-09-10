module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js','scripts/**/*.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		sass: {
			dist: {
				options: {                       							
					style: 'expanded'
				},
				files: {
					'stylesheets/main.css': 'stylesheets/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		connect: {
			server:{
				options: {
					port:9000,
					base: '',
					keepalive: false,
					open: {
						target: 'http://localhost:9000'
					}
				}
			}
		},
		karma: {
			unit: {
				configFile: 'tests/karma.conf.js',
				port: 9001,
				singleRun: false,
				browser: ['PhantomJS'],
				logLevel: 'DEBUG'
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default',['jshint','watch']);

	grunt.registerTask('serve',[
		"jshint",
		"connect:server",
		"watch"
	]);

	grunt.registerTask('test', [
		"jshint",
		"karma"
	]);

};