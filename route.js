const routes = [
   {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
         return 'HomePage';
      },
   },
   {
      method: 'GET',
      path: '/about',
      handler: (request, h) => {
         return 'AboutPage';
      }
   }
];

module.exports = routes;