const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectDB = () => {
    mongoose
      .connect(process.env.DB_URI)
      .then((data) => {
        console.log(`mongodb connected with server: ${data.connection.host}`);
      })
      .catch((error) => {
        console.log(error);
      });
}
module.exports = connectDB;