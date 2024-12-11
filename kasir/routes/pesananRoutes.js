const {
  findPesanan,
  findPesananbyId,
  createNewPesanan,
  updatePesananbyId,
  deletePesananbyId,
} = require("../controller/pesananController");
const router = require("express").Router();

router.get("/pesanan", findPesanan);
router.get("/pesanan/:id", findPesananbyId);
router.post("/pesanan", createNewPesanan);
router.patch("/pesanan/:id", updatePesananbyId);
router.delete("/pesanan/:id", deletePesananbyId);

module.exports = router;
