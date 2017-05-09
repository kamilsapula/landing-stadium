module.exports = function(grunt) {
    grunt.initConfig({

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'public/css/*.css',
                        'public/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 20 versions', 'ie 7-11']
                    })
                ]
            },
            dist: {
                src: 'public/css/*.css'
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'public/css/main.min.css': 'dev/sass/main.sass'
                }
            }
        },
        watch: {
            files: 'dev/sass/**/*.sass',
            tasks: ['sass', 'postcss:dist']
        }
    });
    
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
 
    grunt.registerTask('default', ['browserSync','watch']);
    
}; 

