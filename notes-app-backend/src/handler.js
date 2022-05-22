const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNotHandler = (req, h) => {
   // This to init data structure will we build
   const  { title, tags, body } = req.payload;

   const id = nanoid(16);
   const createdAt = new Date().toISOString();
   const updatedAt = createdAt;

   // This will create data at file
   const newNote = {
      title, tags, body, id, createdAt, updatedAt,
   };

   notes.push(newNote);

   // This will check isSuccess or not
   const isSuccess = notes.filter((note) => note.id === id).length > 0;

   if (isSuccess) {
      const response = h.response({
         status: 'success',
         message: 'Note successfully created',
         data: {
            noteId: id,
         },
      });

      response.code(201);
      return response;
   }

   // This if not success
   const response = h.response({
      status: 'fail',
      message: 'Note failed to create',
   });

   response.code(500);
   return response;
};

  // This will return all note
const getAllNotesHandler = () => ({
   status: 'success',
   data: {
      notes,
   },
});

// This will get data by Id
const getNoteByIdHandler = (request, h) => {
   const { id } = request.params;

   const note = notes.filter((n) => n.id === id)[0];

if (note !== undefined) {
   return {
      status: 'success',
      data: {
      note,
      },
   };
}

const response = h.response({
   status: 'fail',
   message: 'Catatan tidak ditemukan',
});
response.code(404);
return response;
};

// This will update data by Id

const editNoteByIdHandler = (req, h) => {
   const { id } = req.params;

   const { title, tags, body } = req.payload;
   const updatedAt = new Date().toISOString();

   const index = notes.findIndex((note) => note.id === id);

   if (index !== -1) {
      notes[index] = {
         ...notes[index],
         title,
         tags,
         body,
         updatedAt,
      };

      // if success
   const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
   });
      response.code(200);
      return response;
   }
   // if not success
   
   const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui catatan. Id tidak ditemukan',
   });
   response.code(404);
   return response;
};


module.exports = { 
   addNotHandler,
   getAllNotesHandler,
   getNoteByIdHandler,
   editNoteByIdHandler,
};