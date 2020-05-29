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


const server = express()

server.get('/home', (req, res) => {
  const actualPage = '/home/home'
  const queryParams = 'home'
  app.render(req, res, actualPage, queryParams)
});

server.get('/personcenter', (req, res) => {
  const actualPage = '/home/PersonCenter/personCenter'
  const queryParams = 'personcenter'
  app.render(req, res, actualPage, queryParams)
});

server.get('/assignment', (req, res) => {
  const actualPage = '/assignment/assignment'
  const queryParams = 'assignment'
  app.render(req, res, actualPage, queryParams)
});

server.get('/assignment/coding', (req, res) => {
  const actualPage = `/assignment/pages/assignmentCoding/pages/codingHome`;
  const queryParams = 'assignmentCoding';
  app.render(req, res, actualPage, queryParams)
});

server.get('/assignment/question', (req, res) => {
  const actualPage = `/assignment/pages/assignmentCoding/pages/codingDetail`;
  const queryParams = 'codingDetail';
  app.render(req, res, actualPage, queryParams)
});

server.get('/competition', (req, res) => {
  const actualPage = '/competition/competition'
  const queryParams = 'competition'
  app.render(req, res, actualPage, queryParams)
});

server.get('/competition/Arena', (req, res) => {
  const actualPage = '/competition/competitionArena/competitionArena'
  const queryParams = { competitionNum: req.query.competitionNum }
  app.render(req, res, actualPage, queryParams)
});

server.get('/management', (req, res) => {
  const actualPage = '/management/management'
  const queryParams = 'management'
  app.render(req, res, actualPage, queryParams)
})

server.get('*', (req, res) => {
  return handle(req, res)
})
