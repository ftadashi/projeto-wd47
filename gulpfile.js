const PATH_SRC = 'src/';
const PATH_DIST = 'dist/';
const gulp = require('gulp');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');
sass.compiler = require('node-sass');
gulp.task('teste', ()=> {
    console.log('Gulp rodando: teste');
});
gulp.task('prefix', ['copy'], ()=> {
    return gulp.src(PATH_SRC + 'css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest(PATH_DIST + '/css'));
});
gulp.task('copy', ()=> {
    gulp.src(PATH_SRC + 'index.html')
        .pipe(gulp.dest(PATH_DIST));
    gulp.src(PATH_SRC + 'img/**/*.*')
        .pipe(gulp.dest(PATH_DIST + 'img'));
});
gulp.task('sass', 
    ()=> gulp.src(PATH_SRC + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATH_DIST + 'css'))
);
gulp.task('js', () =>
    gulp.src(PATH_SRC + 'js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATH_DIST + 'js'))
);
gulp.task('clean', ()=> {
    return del(PATH_DIST + '**/*');
});
gulp.task('default', ['clean', 'copy', 'sass', 'js']);
gulp.task('watch', ['default'], function() {
    watch(PATH_SRC + 'js/**/*', function() {
        gulp.start('js');
    });
    watch(PATH_SRC + 'scss/**/*', function() {
        gulp.start('sass');
    });
    watch([PATH_SRC + '*.html', PATH_SRC + 'img/*'], function() {
        gulp.start('copy');
    });
});
