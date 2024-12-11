const {
  findCheckout,
  findCheckoutbyId,
  createNewCheckout,
  updateCheckoutbyId,
  deleteCheckoutbyId,
} = require("../controller/checkoutController");
const router = require("express").Router();

router.get("/checkout", findCheckout);
router.get("/checkout/:id", findCheckoutbyId);
router.post("/checkout", createNewCheckout);
router.patch("/checkout/:id", updateCheckoutbyId);
router.delete("/checkout/:id", deleteCheckoutbyId);

module.exports = router;
