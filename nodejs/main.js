var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="/create">create</a>
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist){
  var list = '<ul>';
  for(var i = 0; i < filelist.length; i++){
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
  }
  list += '</ul>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    console.log(pathname);
    //정상적인 디렉터리를 요청했을 때
    if(pathname === '/'){
      //쿼리문이 없다 = 웰컴 페이지 출력
      if (queryData.id === undefined) {
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);  //200 : 파일을 성공적으로 전송했다.
          response.end(template);
        })
      }
      //쿼리문이 있다 = 다른 페이지 출력
      else {
        fs.readdir('./data', function(error, filelist){
          var list = templateList(filelist);
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
            response.writeHead(200);  //200 : 파일을 성공적으로 전송했다.
            response.end(template);
          });
        });
      }
    }
    else if (pathname === '/create'){
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create';
        var list = templateList(filelist);
        var template = templateHTML(title, list, `
        <form action="http://localhost/create_process" method="POST">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" id="" cols="30" rows="10" placeholder="description"></textarea>
          </p>
          <p>
          <input type="submit">
          </p>
        </form>
        `);
        response.writeHead(200);
        response.end(template);
      })
    }
    else if (pathname === '/create_process'){
      var body = '';
      //request 요청할 때 웹브라우저가 보낸 정보들
      //response 우리가 브라우저에 응답하는 정보
      request.on('data', function(data){
        //post로 전송되는 데이터가 많을 경우를 대비해서
        
      });
      request.on('end', function(){

      });
      response.writeHead(200);
      response.end('success');
    }
    //정상적인 디렉터리를 요청하지 않음 = 404 에러
    else {
      response.writeHead(404);  //404 : 파일을 찾을 수 없다.
      response.end('Not found');
    }
    
});
app.listen(80);
