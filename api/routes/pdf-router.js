const express = require("express");
const fileUpload = require("express-fileupload");

const router = express.Router();
const db = require("../models/pdf-model");

// get the PDF
router.get("/", async (req, res) => {
  try {
    const pdf = await db.find();
    res.status(200).json(pdf);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

// get the PDF by id
router.get("/:id", async (req, res) => {
  try {
    const pdf = await db.findById(req.params.id);
    if (pdf) {
      res.status(200).json(pdf);
    } else {
      res.status(404).json({ message: "pdf not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

// post new  pdf
router.post("/", async (req, res) => {
  try {
    const pdf = await db.add(req.body);
    res.status(201).json(pdf);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

// edit pdf
router.put("/:id", async (req, res) => {
  try {
    const updated = await db.update(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: "PDF ID not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating" });
  }
});

// delete pdf
router.delete("/:id", async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "PDF deleted" });
    } else {
      res.status(404).json({ message: "PDF could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting PDF" });
  }
});

module.exports = router;
