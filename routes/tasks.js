// Express Router Setup
const express = require('express');
const router = express.Router();

// Import Controllers
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');

// router.get('/', getThing);
// router.post('/', createThing);
// router.post('/postman', createThing);
// router.put('/', updateThing);
// router.delete('/:id', deleteThing);

// OR

// router.route('/').get((req, res) => {
//     res.send('All Items')
// }).post(updateTask);

// router.route('/').get(getAllTasks);
// router.route('/postman').post(createPostmanThing);
// router.route('/:id').get(updateThing).delete(deleteThing);

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;