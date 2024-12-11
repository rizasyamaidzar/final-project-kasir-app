const router = require("express").Router();
const categoryRouter = require("./categoryRoutes");
const productRouter = require("./productRoutes");
// const usersRouter = require("./usersRouter");
// implemen pada route refactor ke handler
router.use("/api/v1/", categoryRouter);
router.use("/api/v1/", productRouter);
// router.use("/api/v1/users", usersRouter);

module.exports = router;
