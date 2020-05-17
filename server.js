const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const startServer = require('next');

console.log(process.argv);

for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i].indexOf('--') === 0) {
    let item = process.argv[i]
      .substring('--'.length, process.argv[i].length)
      .split('=');
    process.env[item[0]] = item[1];
  }
}

console.log(process.env.NODE_ENV, process.env.APP_ENV);

const dev = process.env.NODE_ENV !== 'production';
console.log(dev);
// const app = next}({  );
// const handle = app.getRequestHandler();
