var http = require("http");
var url= require("url");

function start(route, handle){
	function onRequest(request, response) {
		var postData = "";
		var pathName=url.parse(request.url).pathname;

		console.log("Request for "+pathName+ " received.");

		// request.setEncoding("utf8");

		/* request.addListener("data",function(postDataChunk){
			postData+=postDataChunk;
			console.log("Received POST data chunk '"+ postDataChunk+"'.")
		})

		request.addListener("end", function(){
			console.log(postData)
			route(handle, pathName, response, postData);
		}) */

		route(handle, pathName, response, request);
	}

	http.createServer(onRequest).listen(8888);

}

exports.start=start;

