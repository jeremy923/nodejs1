
var exec = require("child_process").exec;

function start(response) {
  console.log("** Req handler 'start' was called.");


  exec("ls -alh", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });

  /*
  function sleep(ms) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + ms);
  }
  sleep(10000);
  */
}
function upload(response) {
  console.log("** Req handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
 
