# Node

<div align="center"><img src="https://blog.4linux.com.br/wp-content/uploads/2019/12/node-js.png"/></div>


<p>
  As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
</p>

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

<p>
  This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.
</p>
<br/>
<hr/>

## Sources

<ul>
  <li><a href="https://nodejs.org/en/about/"/>Node JS - ORG - About</li>
</ul>
<ul>
  <li><a href="https://www.opus-software.com.br/node-js/"/>Opus - Software</li>
</ul>


