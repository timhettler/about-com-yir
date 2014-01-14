module.exports = function ( grunt ) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks("grunt-modernizr");

  var userConfig = require( './build.config.js' );

  var taskConfig = {

    pkg: grunt.file.readJSON("package.json"),

    htmlbuild: {
      build: {
        src: '<%= app_files.html %>',
        dest: '<%= build_dir %>',
        options: {
          parseTag: 'build',
          beautify: true,
          relative: true,
          scripts: {
            jquery: '<%= build_dir %>/js/bower_components/jquery/jquery.js',
            modernizr: '<%= build_dir %>/js/bower_components/modernizr/modernizr.js',
            components: [
              '<%= build_dir %>/js/bower_components/**/*.js',
              '!**/jquery.js'
            ],
            app: [
              '<%= build_dir %>/js/app/**/*.js'
            ]
          },
          styles: {
            app: '<%= build_dir %>/css/app.css'
          },
          data: {
              version: "<%= pkg.version %>",
              title: "<%= pkg.name %>",
              description: "<%= pkg.description %>"
          },
        }
      },
      compile: {
        src: '<%= build_dir %>/index.html',
        dest: '<%= compile_dir %>',
        options: {
          parseTag: 'compile',
          beautify: true,
          relative: true,
          scripts: {
            modernizr: '<%= compile_dir %>/js/modernizr.js',
            app: '<%= compile_dir %>/js/<%= pkg.name %>.js'
          },
          styles: {
            app: '<%= compile_dir %>/css/app.css'
          }
        }
      }
    },

    clean: [
      '<%= build_dir %>',
      '<%= compile_dir %>'
    ],

    ngmin: {
      compile: {
        files: [
          {
            src: [ 'js/app/**/*.js' ],
            cwd: '<%= build_dir %>',
            dest: '<%= build_dir %>',
            expand: true
          }
        ]
      }
    },

    jshint: {
      src: '<%= app_files.js %>',
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        curly: true,
        immed: true,
        newcap: false,
        noarg: true,
        sub: true,
        eqnull: true,
        browser: true,
        globals: {
        }
      },
    },

    concat: {
      compile_js: {
        src: [
          '<%= vendor_files.js %>',
          '<%= build_dir %>/js/app/**/*.js'
        ],
        dest: '<%= compile_dir %>/js/<%= pkg.name %>.js'
      }
    },

    delta: {

      gruntfile: {
        files: 'Gruntfile.js',
        tasks: [ 'jshint:gruntfile' ],
        options: {
          livereload: false
        }
      },

      jssrc: {
        files: [
          '<%= app_files.js %>'
        ],
        tasks: [ 'jshint:src', 'copy:build_appjs' ]
      },

      assets: {
        files: [
          'src/assets/**/*'
        ],
        tasks: [ 'copy:build_assets' ]
      },

      data: {
        files: [
            'src/data/**/*'
        ],
        tasks: [ 'copy:build_data' ]
      },

      html: {
        files: [ '<%= app_files.html %>' ],
        tasks: [ 'htmlbuild:build' ]
      },

      compass: {
        files: [ 'src/sass/**/*.scss' ],
        tasks: [ 'compass:dev' ]
      }

      // sass: {
      //   files: [ 'src/sass/**/*.scss' ],
      //   tasks: [ 'sass:dev' ]
      // }
    },

    uglify: {
        compile: {
            files: {
                '<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
            }
        }
    },

    compass: {
      dev: {
        options: {
          force: true,
          cssDir: '<%= build_dir %>/css',
          imagesDir: '<%= build_dir %>/assets',
          fontsDir: '<%= build_dir %>/assets/fonts',
          environment: 'development'
        }
      },
      prod: {
        options: {
          force: true,
          cssDir: '<%= compile_dir %>/css',
          imagesDir: '<%= compile_dir %>/assets',
          fontsDir: '<%= compile_dir %>/assets/fonts',
          environment: 'production'
        }
      }
    },

    // sass: {
    //     dev: {
    //         options: {
    //             'sourcemap': true,
    //             'style': 'expanded',
    //             'compass': true,
    //             'lineNumbers': true,
    //         },
    //         files: {
    //             '<%= build_dir %>/css/app.css': 'src/sass/app.scss'
    //         }
    //     },
    //     prod: {
    //         options: {
    //             'style': 'compressed',
    //             'compass': true
    //         },
    //         files: {
    //             '<%= compile_dir %>/css/app.css': 'src/sass/app.scss'
    //         }
    //     }
    // },

    copy: {
      build_assets: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= build_dir %>/assets/',
            cwd: 'src/assets',
            expand: true
          }
       ]
      },
      build_templates: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= build_dir %>/templates/',
            cwd: 'src/templates',
            expand: true
          }
       ]
      },
      build_data: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= build_dir %>/data/',
            cwd: 'src/data',
            expand: true
          }
       ]
      },
      build_appjs: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= build_dir %>/js/app',
            cwd: 'src/js',
            expand: true
          }
        ]
      },
      build_vendorjs: {
        files: [
          {
            src: [ '<%= vendor_files.js %>' ],
            dest: '<%= build_dir %>/js',
            cwd: '.',
            expand: true
          }
        ]
      },
      compile_assets: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= compile_dir %>/assets',
            cwd: '<%= build_dir %>/assets',
            expand: true
          }
        ]
      },
      compile_data: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= compile_dir %>/data',
            cwd: '<%= build_dir %>/data',
            expand: true
          }
        ]
      }
    },

    imageoptim: {
      files: ['bin/assets'],
      options: {
        imageAlpha: true
      }
    },

    modernizr: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: '<%= compile_dir %>/js/modernizr.js',
        extensibility : {
            "addtest" : false,
            "prefixed" : true,
            "teststyles" : false,
            "testprops" : true,
            "testallprops" : true,
            "hasevents" : false,
            "prefixes" : false,
            "domprefixes" : true
        },
        files: [
            '<%= build_dir %>/js/app/*.js',
            '<%= build_dir %>/css/*.css',
        ]
    }

  };

  grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

  grunt.renameTask( 'watch', 'delta' );
  grunt.registerTask( 'watch', [ 'build', 'delta' ] );
  grunt.registerTask( 'default', [ 'build', 'compile' ] );

  grunt.registerTask('build', [
    'clean', 'jshint',
    'copy:build_assets', 'copy:build_data', 'copy:build_appjs', 'copy:build_vendorjs', 'copy:build_templates',
    'compass:dev', 'htmlbuild:build'
  ]);

  grunt.registerTask('compile', [
    'copy:compile_assets', 'copy:compile_data',
    'ngmin', 'concat', 'imageoptim',
    'compass:prod', 'modernizr', 'htmlbuild:compile'
  ]);
};
