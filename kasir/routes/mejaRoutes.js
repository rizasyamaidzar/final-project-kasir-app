const {
  findMeja,
  findMejabyId,
  createNewMeja,
  updateMejabyId,
  deleteMejabyId,
} = require("../controller/mejaController");
const router = require("express").Router();

router.get("/meja", findMeja);
router.get("/meja/:id", findMejabyId);
router.post("/meja", createNewMeja);
router.patch("/meja/:id", updateMejabyId);
router.delete("/meja/:id", deleteMejabyId);

module.exports = router;
