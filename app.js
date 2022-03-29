const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://DurgeshRathore:11223344@durgeshcluster.cpmna.mongodb.net/angular-api?retryWrites=true&w=majority");
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.route');
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.routes');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/admin",adminRouter);
app.use("/api/user",userRouter);
app.use("/api/category",categoryRouter);

app.listen(3000,(res)=>{
    console.log('server is runing');
});
