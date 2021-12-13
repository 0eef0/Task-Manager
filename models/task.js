const mongoose = require('mongoose');

// so what is schema
// const TaskSchema = new mongoose.Schema({
//     name: String,
//     completed: Boolean
// });

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide Your Name'],
        trim: true,
        maxlength: [20, 'Name Cannot Be More Than 20 Characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// this is basic validation not advanced
module.exports = mongoose.model('Task', TaskSchema);

