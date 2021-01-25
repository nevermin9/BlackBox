// READ about architecture
// https://afteracademy.com/blog/design-node-js-backend-architecture-like-a-pro
// https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/
import http from 'http';
import app from './app';

const server = http.createServer(app);
server.listen(process.env.PORT)