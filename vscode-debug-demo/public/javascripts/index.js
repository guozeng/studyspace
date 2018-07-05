var socket = io.connect('http://www.xili28.com:100');    
socket.on('jnd', function (data) {
    console.log(data.k_index + " | " + data.zqu);
});         
