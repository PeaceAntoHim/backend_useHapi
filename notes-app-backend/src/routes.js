const {
   addNotHandler,
   getAllNotesHandler, 
   getNoteByIdHandler,
   editNoteByIdHandler, 
} = require("./handler");

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
   {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
   },
];

module.exports = routes;