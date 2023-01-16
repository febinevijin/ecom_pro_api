const app = require('./app');

const dotenv = require('dotenv');
const connectDB = require('./config/database');

process.on('uncaughtException', (err) => {
     console.log(`Error: ${err.message}`);
     console.log(`Shutting down server due to uncaught exception`);
     process.exit(1);
})

//config
dotenv.config({ path: 'backend/config/config.env' });
// connecting database 

connectDB();

const server = app.listen(process.env.PORT, () => {
     console.log(`server is connected at http://localhost:${process.env.PORT}`);
})

// unhandled promises rejection
process.on('unhandledRejection', (err) => {
     console.log(`Error: ${err.message}`);
     console.log(`Shutting down server due to unhandled Promise rejection`);

     server.close(() => {
          process.exit(1);
     })

})



