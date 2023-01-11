const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://paulo-f1123:12345678ab@cluster0.mcunsdp.mongodb.net/test');
}

module.exports = startDB;