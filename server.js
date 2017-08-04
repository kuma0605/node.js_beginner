var http = require("http");
var url= require("url");

function start(route, handle){
	function onRequest(request, response) {
		
		var pathName=url.parse(request.url).pathname;
		var content=route(handle, pathName, response);
		// response.writeHead(200, {"Content-Type": "text/plain"});
		// response.write(content);
		// response.end();
	}

	http.createServer(onRequest).listen(8888);

}

exports.start=start;

