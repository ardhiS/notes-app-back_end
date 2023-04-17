// const { addNoteHandler } = require('./handler');

// const routes = [
//   {
//     method: 'POST',
//     path: '/notes',
//     handler: addNoteHandler,
//   },
// ];

// module.exports = routes;
const {
  tambahNote,
  dapatkanSemuaNote,
  dapatkanNoteById,
  editNoteById,
  deleteNoteById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: tambahNote,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: dapatkanSemuaNote,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: dapatkanNoteById,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteById,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteById,
  },
];

module.exports = { routes };
