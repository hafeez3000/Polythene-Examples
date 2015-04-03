module.exports = function(grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                clean: true
            },
            example_lib: {
                options: {
                    destPrefix: 'src/app/lib'                    
                },
                files: {
//                    'polythene': 'polythene/',
                    'mithril/mithril.js': 'mithril/mithril.js',
                    'requirejs/require.js': 'requirejs/require.js',
                    'require-css': 'require-css/*.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.registerTask('default', ['bowercopy']);
};