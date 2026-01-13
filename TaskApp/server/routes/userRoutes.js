const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const user = require("../controllers/userController");


router.use(auth);

router.get("/tasks",user.myTasks);
router.put("/tasks/:id",user.updateTaskStatus);


module.exports= router;