const mongoose = require('mongoose');

// Define the schema for your data
const dataSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a model based on the schema
const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
