// import and define MONGO package for database interface
const mongoose = require('mongoose')
// define functioon for connecting to DB
function mongoConfig() {
    mongoose.connect(process.env.MONGO_DB);
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB.')
    })
}
// export DB access function
module.exports = mongoConfig



