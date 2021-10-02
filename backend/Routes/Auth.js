const router = require("express").Router()

//dummy
router.get("/logout",(req, res) => {
          res.send("bye")
})
module.exports = router;
