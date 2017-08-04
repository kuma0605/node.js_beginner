function route(handle, pathName){
    console.log("a request for "+pathName);
    if(typeof handle[pathName]=="function"){
        return handle[pathName]();
    }else{
        console.log("no such request handler");
        return "404 not found";
    }
}
exports.route=route;