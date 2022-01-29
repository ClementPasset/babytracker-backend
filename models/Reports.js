const mongoose = require('mongoose');

const reportsSchema = mongoose.Schema({
    date: { type: Date, required: true, default: "01/01/2021, 00:00:00" },
    urine: { type: Boolean, required: true, default: false },
    stools: { type: Boolean, required: true, default: false },
    feeding: { type: Boolean, required: true, default: false },
    userId: { type: String, required: true, default: null }
});

module.exports = mongoose.model('Report', reportsSchema);