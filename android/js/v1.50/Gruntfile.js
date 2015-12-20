/*global module*/
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            release: 'build'
        },
        requirejs: {
            compile: {
                options: {
                    appDir: '.',
                    baseUrl: '.',
                    dir: './build',
                    fileExclusionRegExp: /^(tpl|node_modules)/,
                    shim:{
                        'zepto':{
                            exports: '$'
                        }
                    },
                    modules: [
                        {
                            name: 'common',
                            include: [
                                'zepto',
                                'lazyload',
                                'swiper',
                                'iscroll'
                            ]
                        },
                        {
                            name: 'list',
                            include: [
                                'page',
                                'text'
                            ],
                            exclude: ['common']
                        },
                        {
                            name: 'search',
                            exclude: ['common']
                        },
                        {
                            name: 'search-list',
                            include: [
                                'page',
                                'text'
                            ],
                            exclude: ['common','search']
                        },
                        {
                            name: 'detail',
                            exclude: ['common']
                        },
                        {
                            name: 'pay',
                            exclude: ['common']
                        }
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');//requirejs优化

    // 注册任务
    grunt.registerTask('default', ['clean', 'requirejs']);

};