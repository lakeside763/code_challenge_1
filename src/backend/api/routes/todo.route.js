const express = require('express');
const {
  getTodos, createTodo, createSubtask, updateTodo, updateSubtask,
} = require('../controllers/todo.controller');

const router = express.Router();

router.route('/').get(getTodos);
router.route('/').post(createTodo);
router.route('/').put(updateTodo);
router.route('/subtask').post(createSubtask);
router.route('/subtask').put(updateSubtask);

module.exports = router;
