const {
  findCart,
  findCartbyId,
  createNewCart,
  updateCartbyId,
  deleteCartbyId,
  searchProducts,
} = require("../controller/cartController");
const router = require("express").Router();

// router.get("/cart", findCart);
router.get("/cart", searchProducts);
router.get("/cart/:id", findCartbyId);
router.post("/cart", createNewCart);
router.put("/cart/:id", updateCartbyId);
router.delete("/cart/:id", deleteCartbyId);

module.exports = router;
