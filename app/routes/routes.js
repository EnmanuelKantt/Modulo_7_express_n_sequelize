const { Router } = require("express");
const {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
} = require("../controllers/user.controller.js");
const {
  createBootcamp,
  findById,
  addUserBootcamp,
  findThem,
} = require("../controllers/bootcamp.controller.js");

const router = Router();

//routes USERS
router.post("/usuarios", createUser);
router.get("/usuarios/:id", findUserById);
router.get("/usuarios/", findAll);
router.put("/usuarios/:id", updateUserById);
router.delete("/usuarios/:id", deleteUserById);

//routs BOOTCAMPS
router.post("/bootcamps", createBootcamp);
router.post("/bootcamps/adduser", addUserBootcamp);
router.get("/bootcamps/:id", findById);
router.get("/bootcamp/", findThem);

module.exports = router;
