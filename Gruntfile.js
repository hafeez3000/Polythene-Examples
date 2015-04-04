module.exports = function(grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                clean: false
            },
            example_lib: {
                options: {
                    destPrefix: 'src/app/lib'                    
                },
                files: {
                    'polythene': 'Polythene/lib/*',
                    'mithril/mithril.js': 'mithril/mithril.js',
                    'requirejs/require.js': 'requirejs/require.js',
                    'require-css': 'require-css/*.js',
                    'polythene/font-iconic/material-design-iconic-font/css': 'material-design-iconic-font/css/*',
                    'polythene/font-iconic/material-design-iconic-font/fonts': 'material-design-iconic-font/fonts/*'
                }
            }
        },
        symlink: {
            options: {
                overwrite: false
            },
            expanded: {
                files: [
                    {
                        expand: true,
                        overwrite: false,
                        cwd: '../polythene/lib',
                        src: ['.'],
                        dest: 'src/app/lib/polythene'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.registerTask('default', ['bowercopy']);
};