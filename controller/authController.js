<<<<<<< HEAD
const User = require("../models/User");
const jwt = require('jsonwebtoken')

// Handling Validation Errors

const handleErrors = (err) => {
  const errors = { email: "", password: "" };

  // Unique Email Error
  if (err.code === 11000) {
    return (errors["email"] = "email is already registered");
  }

  // Email and Password Validation Errors
  if (err.message.includes("users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// jwt
const maxAge = 3 * 24 * 60 * 60
const createToken= (id)=> {
  return jwt.sign({ id }, 'Hemants Secret', { expiresIn: maxAge })
}

module.exports.showData = async (req, res) => {
  try {
    let data = await User.find({});
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    let data = User({ email, password });
    let result = await data.save();
    const token = createToken(data._id)
    res.cookie('jwt', token, { maxAge: maxAge * 1000 })
    res.json({ user: data._id })
  } catch (err) {
    const error = handleErrors(err);
    res.send({ error });
  }
};

=======
const User = require('../model/User')
const jwt = require('jsonwebtoken');
const connectDB = require('../db/mongodb');
connectDB();

// Handle Errors
const handleError = (err)=> {
    const error = { email: '', password: '' };

    // Unique Email validations error
    if( err.code === 11000 )
    {
        error['email'] = 'email already registered';
        return error; 
    }

    // Email and Password validation errors
    if(err.message.includes("users validation failed"))
    {
        Object.values(err.errors).forEach(({ properties })=> {
            error[properties.path] = properties.message;
        });
    }
    console.log(err)
    return error;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id)=> {
    return jwt.sign( { id }, 'hemant seceret Token', { expiresIn: maxAge })
}

module.exports.showData = async (req, res)=> {
    try {
        let data = await User.find({});
        res.send(data);
    } catch(err) {
        console.log(err)
    }
}

module.exports.signup = async (req, res)=> {
    try {
        const { email, password } = req.body;
        const data = await User.create({ email, password });
        const token = createToken(data._id);
        res.cookie('jwt', token, { maxAge: maxAge * 1000 });
        res.send({ user: data._id, email: data.email });
    } catch(err) {
        res.send(handleError(err));
    }
}


module.exports.login = async (req, res)=> {
    try {
        const { email, password } = req.body;
        const data = await User.login(email, password);
        const token = createToken(data._id);
        res.cookie('jwt', token, { maxAge: maxAge * 1000 });
        res.send({ user: data._id, email: data.email} );
    } catch(err) {
        res.json(err.message)
    }
}

module.exports.logout = (req, res)=> {
    res.cookie('jwt', 'hi', { maxAge: 1 });
    res.send("logout working")
}
>>>>>>> 22b6d6d (Auth flow commit)
