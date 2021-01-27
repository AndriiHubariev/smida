const { Router } = require("express");
const router = Router();
const data = require("../test_data.json");
let testData = [...data];

router.get("/", (req, res) => {
  try {
    res.status(200).json(testData);
  } catch (error) {
    res.status(500).json({
      message: "server error",
    });
  }
});

router.delete("/:id", (req, res) => {
  try {
    testData = testData.filter((report) => +report.idReport !== +req.params.id);
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

module.exports = router;
