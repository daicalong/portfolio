/// <binding ProjectOpened='startup' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
        },
        concat: {
            appcss: {
                src: [
                    "./docs/app/app.css",
                    "./docs/app/tailwind.css"
                ],
                dest: "./docs/build/app.css"
            },
            libcss: {
                src: [

                ],
                dest: "./docs/build/libs.css"
            },
            appjs: {
                src: [
                    "./docs/app/app.js",
                    "./docs/app/services/**/*.js",
                    "./docs/app/states/**/*.js",
                    "./docs/app/components/**/*.js"
                ],
                dest: "./docs/build/app.js",
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
                dest: "./docs/build/libs.js",
                options: {
                    sourceMap: true
                }
            }
        },
        shell: {
            tailwind: {
                command: "npm run tailwind"
            }
        },
        'http-server': {
            dev: {

                // the server root directory
                root: 'D:/@Taichi Files@/Current Projects/git/Hatomi 2019/docs',


                port: 8282,
                host: "0.0.0.0",

                cache: '',
                showDir: true,
                autoIndex: true,
                ext: "html",

                // run in parallel with other tasks
                runInBackground: true | false,

                // specify a logger function. By default the requests are
                // sent to stdout.
                logFn: function (req, res, error) { },

                // Proxies all requests which can't be resolved locally to the given url
                // Note this this will disable 'showDir'
                proxy: "https://github.com/daicalong/daicalong.github.io",

                // Tell grunt task to open the browser
                openBrowser: true,

                // customize url to serve specific pages
                customPages: {
                    "/readme": "README.md",
                    "/readme.html": "README.html"
                }

            }
        },
        watch: {
            //skip the './' in front to allow it to see new files added: http://stackoverflow.com/questions/31679375/grunt-contrib-watch-doesnt-see-new-files
            all: {
                files: ["docs/app/**/*.*", "docs/index.html", "!docs/app/build/**/*.*"],
                tasks: ["appjs", "appcss"],
                options: {
                    spawn: false,
                    verbose: true
                }
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask("libs", ["concat:libsjs", "concat:libcss"]);
    grunt.registerTask("appjs", ["concat:appjs"]);
    grunt.registerTask("appcss", ["concat:appcss", "shell:tailwind"]);
    grunt.registerTask("default", ["libs", "appjs", "appcss", "http-server:dev", "watch:all"]);
};