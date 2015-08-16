var humanity = {
    apps:function(method,params,callback){
          var xhr = new XMLHttpRequest;
          var accept = 'application/apps';
          var query = {};
          query['method'] = {};
          query['method'][method] = params;
          xhr.open("POST", window.location.pathname, true);
          xhr.setRequestHeader('Accept',accept);
          xhr.send(JSON.stringify(query));
          xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                var response = JSON.parse(xhr.responseText);
                callback(response);
            }
          }
    }
}
