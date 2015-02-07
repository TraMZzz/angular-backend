// Karma configuration
// Generated on Sat Nov 29 2014 01:00:10 GMT+0200 (EET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
     "bower_modules/angular/angular.js"
    ,"bower_modules/angular-mocks/angular-mocks.js"
    ,"bower_modules/angular-route/angular-route.min.js"
    ,"bower_modules/angular-resource/angular-resource.min.js"
    ,"bower_modules/angular-toastr/dist/angular-toastr.min.js"
    ,"bower_modules/angular-bootstrap/ui-bootstrap-tpls.min.js"
    ,'bower_modules/angular-ui-utils/ui-utils.min.js'

    ,'partials/*.html'
    ,"js/*.js"
    ,"test/*.spec.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome'],

    plugins : [
               'karma-chrome-launcher',
               'karma-firefox-launcher',
               'karma-jasmine',
               'karma-junit-reporter',
               'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
         'partials/*.html': 'ng-html2js'
    },

     ngHtml2JsPreprocessor: {
     // strip this from the file path
     prependPrefix: "/static/",
     moduleName : "partials"
   },
    
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
