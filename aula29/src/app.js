const express = require('express');
const userRouter = require('./routes/users.router');
const orderRouter = require('./routes/orders.router');
const businessRouter = require('./routes/business.router');
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.use('/api/usersRouter', userRouter);
app.use('/api/ordersRouter', orderRouter);
app.use('/api/businessRouter', businessRouter);

mongoose
  .connect(
    "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

module.exports = app;