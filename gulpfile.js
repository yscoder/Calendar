const gulp = require('gulp')
const cleanCss = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync')

const src = './src/'
const dist = './dist/'

gulp.task('css', () => {
    return gulp.src(src + '*.css')
        .pipe(cleanCss())
        .pipe(gulp.dest(dist))
})

gulp.task('js', () => {
    return gulp.src(src + '*.js')
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest(dist))
})

gulp.task('default', ['css', 'js'])

gulp.task('dev', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch(['index.html', src + '*.*'], browserSync.reload)
})