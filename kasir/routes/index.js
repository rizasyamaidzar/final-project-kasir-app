const router = require("express").Router();
const categoryRouter = require("./categoryRoutes");
const productRouter = require("./productRoutes");
const mejaRouter = require("./mejaRoutes");
const cartRouter = require("./cartRoutes");
const checkoutRouter = require("./checkoutRoutes");
const pesananRouter = require("./pesananRoutes");
// const usersRouter = require("./usersRouter");
// implemen pada route refactor ke handler
router.use("/api/v1/", categoryRouter);
router.use("/api/v1/", productRouter);
router.use("/api/v1/", mejaRouter);
router.use("/api/v1/", cartRouter);
router.use("/api/v1/", checkoutRouter);
router.use("/api/v1/", pesananRouter);
// router.use("/api/v1/users", usersRouter);

module.exports = router;
