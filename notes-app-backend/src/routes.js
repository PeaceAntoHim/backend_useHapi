const {addNotHandler, getAllNotesHandler, getNoteByIdHandler } = require("./handler");

const routes = [
   {
      method: 'POST',
      path: '/notes',
      handler: addNotHandler,
   },
   {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
   },
   {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
   },
];

module.exports = routes;