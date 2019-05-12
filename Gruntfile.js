/// <binding ProjectOpened='startup' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
        },
        concat: {
            appcss: {
                src: [
                    "./app/app.css"
                ],
                dest: "./app/build/app.css"
            },
            libcss: {
                src: [
                    
                ],
                dest: "./app/build/libs.css"
            },
            appjs: {
                src: [
                    "./app/app.js",                  
                    "./app/states/**/*.js"
                ],
                dest: "./app/build/app.js",
                options: {
                    sourceMap: true
                }
            },
            libsjs: {
                src: [
                    "./node_modules/angular/angular.js",
                    "./node_modules/@uirouter/angularjs/release/angular-ui-router.js",
                    "./node_modules/angular/angular-mocks/angular-mocks.js"

                ],
                dest: "./app/build/libs.js",
                options: {
                    sourceMap: true
                }
            }
        },
        watch: {
            //skip the './' in front to allow it to see new files added: http://stackoverflow.com/questions/31679375/grunt-contrib-watch-doesnt-see-new-files
            all: {
                files: ["app/**/*.*", "app/index.html", "!app/build/**/*.*"],
                tasks: ["appjs", "appcss"],
                options: {
                    spawn: false,
                    verbose: true
                }
            }
        }
    });


    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("libs", ["concat:libsjs", "concat:libcss"]);
    grunt.registerTask("appjs", ["concat:appjs"]);
    grunt.registerTask("appcss", ["concat:appcss"]);
    grunt.registerTask("default", ["libs", "appjs", "appcss", "watch:all"]);
};