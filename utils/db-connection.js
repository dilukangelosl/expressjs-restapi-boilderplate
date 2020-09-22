const mongoose = require('mongoose');


module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database Connected");
    } catch (error) {
        console.error('Database connection error', error);
    }
}


