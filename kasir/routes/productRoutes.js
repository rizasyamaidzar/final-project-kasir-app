const {
  findProduct,
  findProductbyId,
  createNewProduct,
  updateCategorybyId,
  deleteCategorybyId,
} = require("../controller/productController");
const router = require("express").Router();

router.get("/products", findProduct);
router.get("/products/:id", findProductbyId);
router.post("/products", createNewProduct);
router.patch("/products/:id", updateCategorybyId);
router.delete("/products/:id", deleteCategorybyId);

module.exports = router;
