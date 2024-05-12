const Note = require('../models/noteModel')

exports.getIndex = (req,res,next) => {
  Note
    .findAll()
    .then((notes) => {
      res.render('index', {
        notes: notes,
        editNote: false
      })
    })
    .catch(err => console.log(err))
};

exports.postNote = (req,res,next) => {
  const description = req.body.description;

  Note
    .create({ description: description })
    .then((result) => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteNote = (req,res,next) => {
  const noteId = req.body.noteId;

  Note
    .findByPk(noteId)
    .then(note => {
      return note.destroy()
    })
    .then(result => {
      res.redirect('/')
    })
    .catch(err => console.log(err))
}

exports.getEditNote = (req,res,next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  }

  const noteId = req.params.noteId;
  console.log("Note ID:", noteId);
  Note
    .findByPk(noteId)
    .then(note => {
      res.render('editNote', {
        editNote: note
      })
    })
    .catch(err => console.log(err));
  
}

exports.postEditNote = (req,res,next) => {
  const noteId = req.body.noteId;

  const updatedDesc = req.body.description;

  Note
    .findByPk(noteId)
    .then(note => {
      note.description = updatedDesc;
      return note.save()
    })
    .then(result => {
      res.redirect('/')
    })
    .catch(err => console.log(err))
}
