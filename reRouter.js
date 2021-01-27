const request = require('request');

const reRouter = (req, res, next) => {
  const servers = ['http://localhost:3001', 'http://localhost:1337', 'http://localhost:3002'];
  const { url } = req;

  const route = (serverLoc, url, type) => {
    const location = `${serverLoc}${url}`;
    request(location)
      .on('error', (error) => console.log(error))
      .pipe(res);
  };

  if (url.includes('featured')) {
    route(servers[0], url);
  } else if (url.includes('viewed')) {
    route(servers[1], url);
  } else if (url.includes('reviews')) {
    route(servers[2], url);
  } else {
    next();
  }
};

module.exports = reRouter;

