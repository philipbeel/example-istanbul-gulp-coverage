var gulp = require('gulp');
var open = require('gulp-open');
var karma = require('karma');

/**
 * @name unit:coverage
 * @description Runs unit tests with karma/phantomjs/mocha
 * and generates code coverage report in coverage/
 */
gulp.task('unit:coverage', function(done) {

    return new karma.Server({
            configFile:  __dirname + '/karma.conf.js',
            action: 'run',
            singleRun: true,
            preprocessors: {
                'calculator/js/*.js': ['coverage']
            },
            reporters: ['progress', 'coverage'],
            coverageReporter: {
                type : 'html',
                dir : 'coverage/',
                subdir: '.'
            }
        }, done).on('error', function(err) {
           throw err;
       }).start();
   });


/**
 * @name coverage
 * @description Generates and shows the code coverage report
 */
gulp.task('coverage', ['unit:coverage'], function() {
    return gulp.src('./coverage/js/index.html')
        .pipe(open());
    });

/**
 * @name default
 * @description The standard gulp process for building an app.
 * Runs through a list of tasks individually
 *
 * `$ gulp`
 */
gulp.task('default', function() {
  gulp.start('coverage');
});
