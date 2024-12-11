const {
  findCategory,
  findCategorybyId,
  createNewCategory,
  updateCategorybyId,
  deleteCategorybyId,
} = require("../controller/categoryController");
const router = require("express").Router();

router.get("/category", findCategory);
router.get("/category/:id", findCategorybyId);
router.post("/category", createNewCategory);
router.patch("/category/:id", updateCategorybyId);
router.delete("/category/:id", deleteCategorybyId);

module.exports = router;
