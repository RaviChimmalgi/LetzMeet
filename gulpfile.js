var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['styles', 'scripts'], function() {
  
  browserSync.init({
	  server: "./"
  });
  
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
});  

gulp.task('styles', function() {
	  gulp.src('sass/**/*.scss')
		  .pipe(sass().on('error', sass.logError))
		  .pipe(autoprefixer({browsers: ['last 2 versions']}))
		  .pipe(gulp.dest('./css/'))
		  .pipe(browserSync.stream());
  });

  
  
  gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./js/'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./js/'));
});