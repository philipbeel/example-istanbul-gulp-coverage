var gulp = require("gulp");
// var open = require("gulp-open");
var Server = require("karma").Server;

gulp.task("coverage:unit", done => {
  return new Server(
    {
      configFile: __dirname + "/karma.conf.js",
      action: "run",
      singleRun: true,
      preprocessors: {
        "calculator/js/*.js": ["coverage"]
      },
      reporters: ["progress", "coverage"],
      coverageReporter: {
        type: "html",
        dir: "coverage/",
        subdir: "."
      }
    },
    done()
  )
    .on("error", function(err) {
      throw err;
    })
    .start();
});

gulp.task(
  "coverage",
  gulp.series("coverage:unit", done => {
    // gulp.src("./coverage/js/index.html").pipe(open());
    done();
  })
);

gulp.task(
  "default",
  gulp.series("coverage", done => {
    done();
  })
);
