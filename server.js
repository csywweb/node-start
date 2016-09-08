var http = require("http");
var url  = require("url");

function start(route, handle){
	function onRequest(req, res){
		if(req.url == '/favicon.ico'){
			res.end();
			return;
		} 
		console.log("Request received.");
		var postData = "";
		var pathname = url.parse(req.url).pathname;
		route(handle, pathname, res, req);
	/*	
		req.setEncoding("utf8");

		req.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("received POST data chunk '" + postDataChunk + "'.")
		})
		req.addListener("end", function(){
			route(handle, pathname, res, postData);
		})*/
		
		/*res.writeHead(200, {"Content-Type":"text/plain"});
		res.write(content);
		res.end();*/
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}


exports.start = start;	