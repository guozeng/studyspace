require('./css/index.css');
// require('style-loader!css-loader?minimize!./main.css'); 也可以不在配置文件写
const show = require('./lib/show');

show('hello guozeng!');
$.ajax({
    url: "https://cnodejs.org/",
    type: "get",
    dataType: "jsonp",
    success: function (res) {
        alert(res)
    }
});