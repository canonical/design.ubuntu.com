var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var sourcemaps  = require('gulp-sourcemaps');
var ghPages     = require('gulp-gh-pages');
var uglify      = require('gulp-uglify');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};


/**
 * Run a jekyll command
 */
function runJekyll(commands) {
    bundleArguments = ['exec', 'jekyll'].concat(commands);

    return cp.spawn('bundle', bundleArguments, {stdio: 'inherit'});
}

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return runJekyll(['build']).on('close', done);
});

/**
 * Serve the Jekyll Site
 */
gulp.task('jekyll-serve', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return runJekyll(['serve']).on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site',
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src(['_sass/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['scss', 'node_modules'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Compile files from _js into both _site/css (for live injecting) and site (for future jekyll builds)
 */
 gulp.task('js', function() {
   return gulp.src('_js/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('_site/js'))
     .pipe(browserSync.reload({stream:true}))
     .pipe(gulp.dest('js'));
 });

/**
 * Recompile scss on changes
 */
 gulp.task('watch-scss', function()  {
    gulp.watch('_sass/**/*.scss', ['sass']);
 });

 /**
  * Recompile js on changes
  */
 gulp.task('watch-js', function() {
    gulp.watch('_js/**/*.js', ['js']);
 })

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['jekyll-serve', 'watch-scss', 'watch-js']);

/**
 * Deploy to gh-pages branch to push to Github Pages instance
 */
gulp.task('deploy', function() {
  return gulp.src('./**/*')
    .pipe(ghPages());
});
