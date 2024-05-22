const express = require("express");

const router = express.Router();
router.get("/", (req, res, next) => {
    res.render("layout/blank", {
        pageTitle: "Login",
        pageKey: "../auth/login",
        redirect:req.query.page
    });
});
router.get("/test", (req, res, next) => {
    res.status(200).json("Hello World!");
});
module.exports = router;
