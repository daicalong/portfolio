/// <binding ProjectOpened='startup' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    const sass = require('node-sass');
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            tmp: {
                src: ["./tmp"]
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            appcss: {
                files: {
                    './docs/build/app.css': './docs/build/app.scss'
                }
            }
        },
        concat: {
            appcss: {
                src: [
                    "./docs/app/tailwind.scss",
                    "./docs/app/**/*.{css,scss}"
                ],
                dest: "./tmp/app.scss"
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
                dest: "./tmp/app.js",
                options: {
                    sourceMap: true
                }
            },
            libsjs: {
                src: [
                    "./node_modules/angular/angular.js",
                    "./node_modules/@uirouter/angularjs/release/angular-ui-router.js",
                    "./node_modules/angular-animate/angular-animate.min.js",
                    "./node_modules/angular-loading-bar/build/loading-bar.min.js",
                    "./node_modules/angular-cookies/angular-cookies.js",
                ],
                dest: "./tmp/libs.js",
                options: {
                    sourceMap: true
                }
            },
        },
        cssmin: {
            appcss: {
                files: {
                    "./docs/build/app.min.css": ["./docs/build/app.css"]
                },
                options: {
                    root: "./docs/build",
                    processImport: false,
                    sourceMap: true
                }
            },
            libscss: {
                files: {
                    "./docs/build/libs.min.css": ["./docs/build/libs.css"]
                },
                options: {
                    root: "./build",
                    sourceMap: true
                }
            }
        },
        uglify: {
            libsjs: {
                src: "./tmp/libs.js",
                dest: "./docs/build/libs.min.js",
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: "./docs/build/libs.js.map"
                }
            },
            appjs: {
                src: "./tmp/app.js",
                dest: "./docs/build/app.min.js",
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: "./docs/build/app.js.map"
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
                root: './docs/',
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
                logFn: function(req, res, error) {},

                // Proxies all requests which can't be resolved locally to the given url
                // Note this this will disable 'showDir'
                proxy: false,

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

    grunt.event.on("watch", function(action, filepath, target) {
        grunt.log.writeln(target + ": " + filepath + " was " + action);
        var ext = filepath.substring(filepath.lastIndexOf("."));
        var tasks = [];
        if (ext === ".js") tasks = ["appjs"];
        if (ext === ".css" || ext === ".scss") tasks = ["appcss", "clean:tmp"];
        grunt.config("watch.all.tasks", tasks);
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask("libs", ["concat:libsjs", "uglify:libsjs", "concat:libcss", "cssmin:libscss"]);
    grunt.registerTask("appjs", ["concat:appjs", "uglify:appjs"]);
    grunt.registerTask("appcss", ["concat:appcss", "shell:tailwind", "sass:appcss", "cssmin:appcss"]);
    grunt.registerTask('http', ["http-server:dev"]);
    grunt.registerTask("default", ["libs", "appjs", "appcss", "uglify", "clean:tmp", "http-server:dev", "watch:all"]);
};