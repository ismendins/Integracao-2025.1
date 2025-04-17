const express = require('express');
const taskControl = require('../controller/taskController');

const router = express.Router();

router.get("/", taskControl.funcGetTasks);
router.get("/tasks", taskControl.funcGetTasks);

module.exports = router;