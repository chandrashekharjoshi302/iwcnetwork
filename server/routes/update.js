const express = require("express");
const { sequelize } = require("../config/db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {Id, Title } = req.body;

    await sequelize.query(
      `UPDATE persons SET Title='${Title}' WHERE Id=${Id}`
    );

    res.send({ update: "success" });
    res.end();
  } catch (error) {
    console.error("Error updating persons:", error);
    res.send({ update: "fail" });
  }
});

module.exports = router;
