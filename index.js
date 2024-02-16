<<<<<<< HEAD
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/authRouter");
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
=======
const express = require('express');
const app = express();
const router = require('./router/authRouter');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const PORT = 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser());
>>>>>>> 22b6d6d (Auth flow commit)

// Routes
app.use(router);

<<<<<<< HEAD
app.listen(PORT, () => {
  console.log("Running at Port : ", PORT);
});
=======
app.listen( PORT, ()=> {
    console.log("Listening at Port: ", PORT);
})
>>>>>>> 22b6d6d (Auth flow commit)
