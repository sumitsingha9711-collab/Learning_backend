const app = require('./src/app');
const connectDB = require('./src/DB/bd');

connectDB()

app.listen(3000, () =>{

    console.log("server is running");
    
})