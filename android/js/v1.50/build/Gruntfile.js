module.exports=function(e){e.initConfig({pkg:e.file.readJSON("package.json"),clean:{release:"build"},requirejs:{compile:{options:{appDir:".",baseUrl:".",dir:"./build",fileExclusionRegExp:/^(tpl|node_modules)/,shim:{zepto:{exports:"$"}},modules:[{name:"common",include:["zepto","lazyload","swiper","iscroll"]},{name:"list",include:["page","text"],exclude:["common"]},{name:"search",exclude:["common"]},{name:"search-list",include:["page","text"],exclude:["common","search"]},{name:"detail",exclude:["common"]},{name:"pay",exclude:["common"]}]}}}}),e.loadNpmTasks("grunt-contrib-clean"),e.loadNpmTasks("grunt-contrib-requirejs"),e.registerTask("default",["clean","requirejs"])};