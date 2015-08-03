module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    jade: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [ {
          cwd: 'assets/views',
          src: '**/*.jade',
          dest: 'public',
          expand: true,
          ext: '.html'
        } ]
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
          'public/css/main.css': 'assets/less/main.less',

        }
      }
    },

    watch: {
      styles: {
        files: [
          'less/main.less',
          '**/*.jade'
        ],
        tasks: ['less','jade'],
        options: {
          nospawn: true
        }
      }
    },

    connect: {
      server: {
        options: {
          base: 'public',
          port: 9800,
          useAvailablePort: true
        }
      }
    }
  });

  grunt.registerTask('default', ['jade','less']);
  grunt.registerTask('serve', ['jade','less','connect:server','watch']);
};
