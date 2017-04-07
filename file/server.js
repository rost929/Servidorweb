var http = require ('http');
var fs = require('fs');
// Crear una instancia del servidor htpp
var server = http.createServer(atenderServidor);

console.log("Servidor iniciado");

//Iniciar la escucha del servidor en el puerto 8088
server.listen(8088);

function atenderServidor(request,response){
    console.log("Peticion recibida :" + request.url);
    
    if(request.url== "/ajedrez"){
        retornarArchivo(request,response);
    }else if (request.url == "/fecha"){
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth()+1;
        var ano = fecha.getFullYear();
        response.end("La fecha es: " + dia + "/" + mes+ "/"+ano);
    } else if (request.url.includes('.') && request.url != "/fecha" && request.url != "/ajedrez"){
     retornarCualquierArchivo(request,response);
    }else{
         response.end("Hola mundo");
    }
}

function retornarCualquierArchivo(request, response){
    fs.readFile(request.url.substr(1), archivoListo);


function archivoListo(error,data){
    if(error == null){
        response.write(data);
        response.end();
    }else{
        console.log(error);
        response.end(error.toString());
    }
}
}

function retornarArchivo(request, response){
    fs.readFile('ajedrez.html', archivoListo);


function archivoListo(error,data){
    if(error == null){
        response.write(data);
        response.end();
    }else{
        console.log(error);
        response.end(error.toString());
    }
}
}