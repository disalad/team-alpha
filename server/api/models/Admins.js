const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dpUrl: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    ghUrl: {
        type: String,
    },
});
module.exports = mongoose.model('Admins', AdminSchema);
