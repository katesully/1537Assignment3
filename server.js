const app = require('./app.js');

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/test');
  await mongoose.connect('mongodb+srv://user2:8Qr7y2F46OwbEI5w@assignment3.bqyrq6k.mongodb.net/?retryWrites=true&w=majority');
  

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



