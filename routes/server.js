const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.render("server", {});
    }
    catch(e){    
        res.status(404).json({message: "Invalid Request"});    
    }
});

module.exports = router;
