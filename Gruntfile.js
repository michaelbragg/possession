module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          'global.css': ['global.less']
        }
      }
    }

    ,csslint: {
      options: {
         "adjoining-classes": false
        ,"box-sizing": false
        ,"universal-selector": false
      }
      ,files: {
        src: ['global.css']
      }
    }

    ,watch: {
      files: ['/**/*.less']
     ,tasks: ['serve']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['serve']);
  grunt.registerTask('ci-server', ['csslint']);
  grunt.registerTask('serve', ['less']);

};
