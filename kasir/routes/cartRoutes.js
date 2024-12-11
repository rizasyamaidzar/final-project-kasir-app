const {
  findCart,
  findCartbyId,
  createNewCart,
  updateCartbyId,
  deleteCartbyId,
} = require("../controller/cartController");
const router = require("express").Router();

router.get("/cart", findCart);
router.get("/cart/:id", findCartbyId);
router.post("/cart", createNewCart);
router.patch("/cart/:id", updateCartbyId);
router.delete("/cart/:id", deleteCartbyId);

module.exports = router;
