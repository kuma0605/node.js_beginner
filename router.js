function route(handle, pathName){
    console.log("a request for "+pathName);
    if(typeof handle[pathName]=="function"){
        handle[pathName]();
    }else{
        console.log("no such request handler");
    }
}
exports.route=route;