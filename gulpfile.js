var gulp         = require('gulp'),
    imagemin     = require('gulp-imagemin')
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify'),
    pump         = require('pump')
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps'),
    iconfont     = require("gulp-iconfont"),
    consolidate  = require("gulp-consolidate");

gulp.task('sass', function () {
  return gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 3 version'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(browser.stream({match: '**/*.css'}))
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('assets/js/*.js'),
        uglify(),
        gulp.dest('./dist/assets/js')
    ],
    cb
  );
});

gulp.task('compress:img', function () {
    gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/img'))
});

gulp.task("build:icons", function() {
    return gulp.src(["./assets/icons/*.svg"])//path to svg icons
      .pipe(iconfont({
        fontName: "myicons",
        formats: ["ttf", "eot", "woff", "svg"],
        centerHorizontally: true,
        fixedWidth: true,
        normalize: true
      }))
      .on("glyphs", function (glyphs) {

        gulp.src("./assets/icons/util/*.scss") // Template for scss files
            .pipe(consolidate("lodash", {
                glyphs: glyphs,
                fontName: "myicons",
                fontPath: "../fonts/"
            }))
            .pipe(gulp.dest("./assets/scss/icons/"));//generated scss files with classes
      })
      .pipe(gulp.dest("./dist/assets/fonts/"));//icon font destination
});

// Starts a BrowerSync instance
gulp.task('serve', ['sass'], function(){
  browser.init({
        server: {
            baseDir: "./"
        }
    });
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve'], function() {
  gulp.watch(['assets/scss/**/*.scss'], ['sass']);
  gulp.watch('./**/*.html').on('change', browser.reload);
});