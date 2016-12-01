/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /*
            Change these:
            width: ,
            suffix: ,
            quality:
            */
            name: '140-1x',
            width: '140px',
            quality: 30
          }, {
            name: '140-2x',
            width: '280px',
            quality: 40
          }, {
            name: '250-1x',
            width: '250px',
            quality: 30
          }, {
            name: '250-2x',
            width: '500px',
            quality: 40
          }, {
            name: '360-1x',
            width: '360px',
            quality: 30
          }, {
            name: '360-2x',
            width: '720px',
            quality: 40
          }, {
            name: '400-1x',
            width: '400px',
            quality: 30
          }, {
            name: '400-2x',
            width: '800px',
            quality: 40
          }, {
            name: '600-1x',
            width: '600px',
            quality: 30
          }, {
            name: '600-2x',
            width: '1200px',
            quality: 40
          }, {
            name: '805-1x',
            width: '805px',
            quality: 30
          }, {
            name: '805-2x',
            width: '1610px',
            quality: 40
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/front_end',
          dest: 'images/front_end'
        }, {
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/logo',
          dest: 'images/logo'
        }, {
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/machine_learning',
          dest: 'images/machine_learning'
        }, {
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/creativity',
          dest: 'images/creativity'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
