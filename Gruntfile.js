module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    exec: {
      lavender: {
        cmd: function(){

          var command     = "php vendor/lavender/src/Lavender/lavender-cli.php views $view $destination;"
            , view        = "view=$(echo $file | sed -e 's/\\.lavender$//' | sed -e 's/^views\\///');"
            , destination = "destination=$(echo $file | sed -e 's/lavender$/html/' | sed -e 's/^views/public/');"
            , loop = "for file in `ls views/*.lavender`; do " + view + destination + command + "done"

          return loop;
        }
      }
    },

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          'public/css/main.css': 'less/main.less',

        }
      }
    },

    watch: {
      styles: {
        files: [
          'less/main.less',
        ],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['exec' ,'less']);
};
