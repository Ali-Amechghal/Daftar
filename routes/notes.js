var express = require('express');
var router = express.Router();
var mongoose =  require('monogoose');


/**
 * get Notes list ordered by date desc
 *
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 *get Note  by Id
 *
 *
router.get('/:idNote', function(req, res, next){

});
/**
 *  Get all Notes tagged by  given tag
 *
 */
router.get('/:tag', function(req, res, next){

});

/**
 *  add a new Notes
 *   the paramter object should contains the params bellow
 *   title ,
 *   Description
 *   probleme
 *   solution
 *   attachment (pdf ,config file)
 *   tag[]
 */
router.post('/add',function(req , res , next){

});

/**
 * update a given  note
 * the object note with a new values should be given as param
 *
 */
router.post('/update', function(req, res , next){

});
/**
 *Delete a given  Note ,it take note object as param or objectID
 * represinting the note object to delete
 *
 */
router.post('/delete', function(req, res , next){

});

module.exports = router;
