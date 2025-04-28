const express = require('express');
const dotenv = require('dotenv').config();
const userRouter = require('./routes/routesUser');
const taskRouter = require('./routes/routesTask');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/rest/user", userRouter);
app.use("/rest/task", taskRouter);

app.listen(port, ()=>{
    console.log(`The server is running on http://localhost:${port}`);
});