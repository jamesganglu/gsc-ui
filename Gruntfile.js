module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		sourceFolder : 'src',
		sandboxFolder : 'sandbox',
		devFolder:'svn',

		sass:{
			core:{
				options:{
					sourcemap:'none',
					style:'expanded'
				},
				files:{
					'<%= sandboxFolder%>/style/main.css':'<%= sourceFolder%>/sass/core/main.scss',
					'<%= devFolder%>/style/main.css':'<%= sourceFolder%>/sass/core/main.scss'
				}
			},
			tools:{
				options:{
					sourcemap:'none',
					style:'expanded'
				},
				files:{
					'<%= sandboxFolder%>/tools/assets/common/css/tools.css':'<%= sourceFolder%>/sass/tools/**/tools.scss',
					'<%= devFolder%>/tools/assets/common/css/tools.css':'<%= sourceFolder%>/sass/tools/**/tools.scss'
				}
			},
			vipGetActiveChallenge:{
				options:{
					sourcemap:'none',
					style:'expanded',
				},
				files:{
					'<%= sandboxFolder%>/vip-get-active-challenge/css/main.css':'<%= sourceFolder%>/sass/vip-get-active-challenge/main.scss',
					'<%= devFolder%>/vip-get-active-challenge/css/main.css':'<%= sourceFolder%>/sass/vip-get-active-challenge/main.scss'
				}
			},
			spotlight:{
				options:{
					sourcemap:'none',
					style:'expanded',
				},
				files:{
					'<%= sandboxFolder%>/spotlight/css/spotlight.css':'<%= sourceFolder%>/sass/spotlight/spotlight.scss',
					'<%= devFolder%>/spotlight/css/spotlight.css':'<%= sourceFolder%>/sass/spotlight/spotlight.scss'
				}
			}
		},


		/*concat: {
			options:{
				sourceMap:false
			},
			sandbox: {
				src: ['<%= sourceFolder%>/js/lib/*.js', '<%= sourceFolder%>/js/plugins/*.js', '<%= sourceFolder%>/js/*.js', '<%= sourceFolder%>/js/last/*.js'],
				
				dest:'<%= sandboxFolder%>/js/common.js',
			},
			dev: {
				src: ['<%= sourceFolder%>/js/lib/*.js', '<%= sourceFolder%>/js/plugins/*.js', '<%= sourceFolder%>/js/*.js'],
				
				dest:'<%= devFolder%>/js/common.js',
			}
		},*/

		watch:{
			//scripts:{
			//	files:['<%= sourceFolder%>/**/*.js'],
			//	tasks:['concat', 'uglify']
			//},
			sass:{
				files:['<%= sourceFolder%>/sass/**/*.scss'],
				tasks:['sass'],
				options:{
					spawn:false
				}
			},
			//cssmin:{
			//	files:['<%= sandboxFolder%>/css/*.css'],
			//	tasks:['cssmin']				
			//}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['watch']);
};