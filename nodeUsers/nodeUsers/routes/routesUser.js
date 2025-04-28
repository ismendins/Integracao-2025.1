const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/users", userControl.funcGetUsers);
router.post("/users", userControl.funcPostUsers);
router.delete("/users/${id}", userControl.funcDelUsers);

module.exports = router;