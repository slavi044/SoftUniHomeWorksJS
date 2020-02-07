function validatesAnHTTPRequest(HTTPRequest) {
    if (HTTPRequest.method === 'GET' ||
            HTTPRequest.method === 'POST' ||
            HTTPRequest.method === 'DELETE' ||
            HTTPRequest.method === 'CONNECT' ) {            
            
        } else {
            throw new Error("Invalid request header: Invalid Method");
        }

        if(HTTPRequest.uri === '') {
            throw new Error("Invalid request header: Invalid URI");
        }

        if (HTTPRequest.version === 'HTTP/0.9' ||
            HTTPRequest.version === 'HTTP/1.0' ||
            HTTPRequest.version === 'HTTP/1.1' ||
            HTTPRequest.version === 'HTTP/2.0' ) {
            
        } else {
            throw new Error("Invalid request header: Invalid Version");
        }

        let specialChars = /[\<\>\\\&\'\"]/g;
        
        if (HTTPRequest.message.match(specialChars)) {
            throw new Error("Invalid request header: Invalid Message");
        }

        return HTTPRequest;
};

validatesAnHTTPRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});