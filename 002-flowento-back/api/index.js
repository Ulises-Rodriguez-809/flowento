import http from 'http';
import app from '../src/app.js';

const server = http.createServer(app);

server.listen(8080,()=>{
    console.log(`Escuchando el puerto ${8080}, iniciando express en http://localhost:${8080}/`);
})