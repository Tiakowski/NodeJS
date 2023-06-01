const mongoose = require('mongoose');

const appointment = new mongoose.Schema({
    name: String,
    email: String,
    desciption: String,
    cpf: String,
    date: Date,
    time: String,
    finished: Boolean
});

module.exports = appointment;