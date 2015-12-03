// ������������ ������
module.exports = function(grunt) {

    // ������
    grunt.initConfig({
        // ���������
        concat: {
            main: {
                src: [
                    //'js/libs/jquery.js',
                    //'js/mylibs/**/*.js'  // ��� JS-����� � �����
                    '/app/bower_components/jquery/dist/jquery.js',
                    '/app/app.js'
                    //'/app/leftPanel/**/*.js'
                ],
                dest: 'build/scripts.js'
            }
        },
        // �������
        uglify: {
            main: {
                files: {
                    // ��������� ������ concat
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },

        // ������� ������������ ������ -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish') // ���������� jshint-stylish ��� ������ �������������� ������ �� �������
            },

            // ����� �� ��������� �����, ������� ���������� ���������
            // ����� ������� ������ ����� �������� Gruntfile.js � ��� ����� � ����������� .js � ����� src
            build: ['Gruntfile.js', 'app/**/*.js']
        }

    });


    // �������� ��������, ������������� � ������� npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // ������ �� ���������
    //grunt.registerTask('default', ['concat', 'uglify']);
    //grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']);
   // grunt.registerTask('default', ['jshint']);
};
//http://www.creative-seo.ru/blog/grunt-js-ustanovka-i-nastrojka/