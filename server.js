const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');
const user_control = require('./controller/control');

app.use(urlencoded({extended : true}));

app.use(bodyparser.json());
app.use(cors());


app.use('/insert' , user_control.insert);
app.use('/login' , user_control.login);

app.listen(5000);