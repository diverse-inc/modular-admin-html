var config = require("../../config/");
var path = require("path");
var sass = require('gulp-sass')(require('sass'));

module.exports.task = function (gulp, plugins, paths) {
	return function vendor_styles() {
		return gulp
			.src(paths.vendor.styles)
			.pipe(plugins.concat("vendor.css"))
			.pipe(gulp.dest(config.destDir + "/css"))
			.pipe(plugins.connect.reload())
			.on( 'error', sass.logError );
	};
};
