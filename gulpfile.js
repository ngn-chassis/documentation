const chassis = require('@chassis/gulp')
const fs = require('fs-extra')
const gulp = require('gulp')
const path = require('path')
const pkg = require('./package.json')
const sourcemaps = require('gulp-sourcemaps')

const SRC = './showroom/src'
const SRC_ASSETS = {
  CSS: path.join(SRC, '**/*.css'),
  WEBCOMPONENTS: './webcomponents/dist/**/*.js',
  POLYFILLS: path.join(SRC, './polyfills/**/*.*')
}

const DEST = './showroom/dist'
const DEST_ASSETS = {
  CSS: path.join(DEST, 'css'),
  WEBCOMPONENTS: path.join(DEST, 'webcomponents'),
  POLYFILLS: path.join(DEST, 'polyfills')
}

gulp.task('clean', (next) => fs.emptyDir(DEST, next))

gulp.task('css', ['clean'], (next) => {
  return gulp.src(SRC_ASSETS.CSS)
    .pipe(sourcemaps.init())
    .pipe(chassis({
      importBasePath: path.resolve(`${SRC}/css`),
      theme: path.resolve(`${SRC}/main.theme`),
      // legacy: false,
      // customProperties: {},
    	layout: {
    		minWidth: 320,
    		maxWidth: 1600
    	}
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DEST))
})

gulp.task('html', ['clean'], (next) => {
  return gulp.src(`${SRC}/**/*.html`).pipe(gulp.dest(DEST))
})

gulp.task('webcomponents', ['clean'], (next) => {
  gulp.src(SRC_ASSETS.WEBCOMPONENTS).pipe(gulp.dest(DEST_ASSETS.WEBCOMPONENTS))
})

gulp.task('polyfills', ['clean'], (next) => {
  gulp.src(SRC_ASSETS.POLYFILLS).pipe(gulp.dest(DEST_ASSETS.POLYFILLS))
})

gulp.task('watch', () => {
  gulp.watch(path.resolve(path.join(SRC, '**/*.*')), ['css', 'html'])
})

gulp.task('build', ['clean', 'css', 'html', 'webcomponents', 'polyfills', 'watch'])
