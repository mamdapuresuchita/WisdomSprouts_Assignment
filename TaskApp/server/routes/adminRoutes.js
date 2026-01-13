const router= require("express").Router();

const auth = require("../middleware/authMiddleware")
const role = require("../middleware/roleMiddleware")
const admin = require("../controllers/adminController");
const { route } = require("./authRoutes");


router.use(auth,role("admin"));


router.get('/users',admin.getUsers);
router.post('/tasks',admin.createTask);

router.get('/tasks',admin.getAllTasks);

router.delete('/tasks/:id',admin.deleteTask);

module.exports = router;