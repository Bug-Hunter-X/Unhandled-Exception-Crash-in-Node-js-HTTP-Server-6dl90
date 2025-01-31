const http = require('http');

const requestListener = (request, response) => {
  try {
    // Your code here
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

// Handle uncaught exceptions to prevent the entire process from crashing
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform cleanup, log, etc.
  process.exit(1);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});