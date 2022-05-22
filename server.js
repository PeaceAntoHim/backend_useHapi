'use-strict';

import { server as _server } from '@hapi/hapi';
import { route as _route } from './route';

const init = async () => {
   const server = _server({
      port: 5000,
      host: 'localhost',
   });

   server.route(_route);

   await server.start();
   console.log(`Server berjalan pada ${server.info.uri}`);
};

init();