// step 3 start
const {Router} = require('express');
const router = Router();
// step 3 pause

// step 5 injection
const { getTodo, saveTodo, updateTodo, deleteTodo } = require('../controllers/TodoController');

// route to get all the todos from DB
router.get('/', getTodo); 

// route to send all the todos from DB
router.post('/save', saveTodo);

// route to update todo
router.post('/update', updateTodo);

// route to delete todo
router.post('/delete', deleteTodo);
// step 5 dejection

module.exports = router;
// step 3 end   