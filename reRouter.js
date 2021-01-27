const request = require('request');

const reRouter = (req, res, next) => {
  const servers = ['http://localhost:3001', 'http://localhost:1337', 'http://localhost:3002'];
  const { url } = req;

  const route = (serverLoc, url, param) => {
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
  } else if (url.includes('/product/')) {
    let arr = url.split('/');
    let num = arr[2];
    request(`${servers[0]}/api/product/${num}`)
      .on('error', (error) => console.log(error))
      .pipe(res);
  } else {
    next();
  }
};

module.exports = reRouter;

