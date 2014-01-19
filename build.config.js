module.exports = {

    build_dir: 'build',
    compile_dir: 'bin',

    app_files: {
        js: ['src/js/**/*.js'],
        atpl: [ 'src/templates/*.tpl.html' ],
        html: ['src/*.html'],
    },

    vendor_files: {
        js: [
                'bower_components/jquery/jquery.js',
                'bower_components/impressjs/js/impress.js',
                'bower_components/fastclick/lib/fastclick.js'
            ],
        css: []
    },
};
