<<<<<<< HEAD
const authController = require("../controller/authController");
const { Router } = require("express");

const router = Router();

router.get("/", authController.showData);
router.post("/signup", authController.signup);

module.exports = router;
=======
const { Router } = require('express');
const authController = require('../controller/authController');

const router = Router();

// router.get('*', checkUser )
router.get('/', authController.showData );
router.post('/signup', authController.signup );
router.post('/login', authController.login );
router.get('/logout', authController.logout );


module.exports = router
>>>>>>> 22b6d6d (Auth flow commit)
