var gulp = require('gulp');
var replace = require('gulp-replace');
var htmlmin = require('gulp-htmlmin');
var log = require('fancy-log');



gulp.task('js:minify', function () {
  gulp.src(["./dist/main.*.js", "./dist/polyfills.*.js", "./dist/inline.*.js"])
    .pipe(replace(/\/\*([\s\S]*?)\*\/[\s\S]?/g, ""))
    .pipe(gulp.dest("./dist"));
});

gulp.task('web:config', function () {
  gulp.src(["./src/app/web.config"])
    .pipe(gulp.dest("./dist"));
});

gulp.task('apache:htaccess', function () {
  gulp.src(["./src/app/.htaccess"])
    .pipe(gulp.dest("./dist"));
});

gulp.task("html:minify", function () {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:versioninfo', function (){

   require('dotenv').load();
  var versionString = process.env.BuildVersion;

  return gulp.src('dist/index.html')
    .pipe(replace("<span id=\"BuildVersionNumber\"></span>", "<span id=\"BuildVersionNumber\">" + versionString + "</span>"))
    .pipe(gulp.dest('./dist'));

}  
);

gulp.task("default", ["js:minify", "html:minify", "web:config", "apache:htaccess","build:versioninfo"]);
