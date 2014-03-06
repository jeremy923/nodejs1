
//var exec = require("child_process").exec;
var querystring = require('querystring');

function start(response, postData) {
  console.log("** Req handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
  /*
  exec("ls -alh", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
  */

  /*
  function sleep(ms) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + ms);
  }
  sleep(10000);
  */
}

function upload(response, postData) {
  console.log("** Req handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent: " + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
 
