// backend/server.js
const http = require('http');
const port = 3000;

// Servidor simple que responde con JSON
const requestListener = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (req.url === '/api/') {
      res.end(JSON.stringify({ message: 'Conexión Exitosa con la API del Backend!' }));
  } else {
      res.end(JSON.stringify({ message: 'Ruta no reconocida, pero el servidor está UP' }));
  }
};

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Backend escuchando en el puerto ${port}`);
});