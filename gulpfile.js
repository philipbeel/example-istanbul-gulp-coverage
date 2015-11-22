var open = require('gulp-open');
var jsonminify = require('gulp-jsonminify');
var zip = require('gulp-zip');
var uglifyConf = {
    compress: {
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        drop_console: true
    }
};

/**
 * @name unit:coverage
 * @description Runs unit tests with karma/phantomjs/mocha
 * and generates code coverage report in coverage/
 */
gulp.task('unit:coverage', function() {
    return gulp.src([])
        .pipe(karma({
            configFile: './karma.conf.js',
            action: 'run',
            preprocessors: {
                'calculator/js/*.js': ['coverage']
            },
            reporters: ['progress', 'coverage'],
            // Configure the coverage reporter
            coverageReporter: {
                type : 'html',
                dir : 'coverage/',
                subdir: '.'
            }
        }))
        .on('error', function(err) {
            throw err;
        });
});

/**
 * @name coverage
 * @description Generates and shows the code coverage report
 */
gulp.task('coverage', ['unit:coverage'], function() {
    return gulp.src('./coverage/index.html')
        .pipe(open());
});

/**
 * @name default
 * @description The standard gulp process for building an app.
 * Runs through a list of tasks individually
 *
 * `$ gulp`
 */
gulp.task('default', ['clean'], function() {
    gulp.start('images', 'html', 'amd');
});
