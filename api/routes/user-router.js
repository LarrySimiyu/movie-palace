const express = require("express");
const router = express.Router();
const db = require("../models/user-model");

router.get("/", async (req, res) => {
  try {
    const user = await db.find();
    res.status(200).json(user);
  } catch {
    res.status(500).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await db.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(500).json(error.message);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await db.add(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await db.update(req.params.id, req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(500).json({
        message: "Error finding id"
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "User Deleted"
      });
    } else {
      res.status(400).json({
        message: "The user could not be found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting"
    });
  }
});

module.exports = router;
