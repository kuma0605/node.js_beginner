function route(handle, pathName, response, postData){
    console.log("a request for "+pathName);
    if(typeof handle[pathName]=="function"){
        return handle[pathName](response, postData);
    }else{
        console.log("no such request handler");
        response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("404 not found");
		response.end();
    }
}
exports.route=route;