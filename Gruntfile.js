// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                    //'js/libs/jquery.js',
                    //'js/mylibs/**/*.js'  // Все JS-файлы в папке
                    '/app/bower_components/jquery/dist/jquery.js',
                    '/app/app.js'
                    //'/app/leftPanel/**/*.js'
                ],
                dest: 'build/scripts.js'
            }
        },
        // Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },

        // зададим конфигурацию модуля -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish') // используем jshint-stylish для вывода стилизованного отчета об ошибках
            },

            // здесь мы указываем файлы, которые необходимо проверить
            // после запуска задачи будет проверен Gruntfile.js и все файлы с расширением .js в папке src
            build: ['Gruntfile.js', 'app/**/*.js']
        }

    });


    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Задача по умолчанию
    //grunt.registerTask('default', ['concat', 'uglify']);
    //grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']);
   // grunt.registerTask('default', ['jshint']);
};
//http://www.creative-seo.ru/blog/grunt-js-ustanovka-i-nastrojka/