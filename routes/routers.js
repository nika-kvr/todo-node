const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.getIndex);

router.post('/add-note', controller.postNote);

router.post('/delete-note', controller.deleteNote);

router.get('/edit-note/:noteId', controller.getEditNote);

router.post('/edit-post-note', controller.postEditNote)

module.exports = router;
