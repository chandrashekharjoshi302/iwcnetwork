const express = require("express");
const { sequelize } = require("../config/db");
const router = express.Router();

router.delete("/:Id", async (req, res) => {
  try {
    const { Id } = req.params;

    await sequelize.query(`DELETE FROM persons WHERE Id=${Id}`);

    res.send({ delete: "success" });
  } catch (error) {
    console.error("Error deleting persons", error);
    res.send({ delete: "fail" });
  }
});

module.exports = router;
