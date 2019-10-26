const express = require("express");
const router = express.Router();
const db = require("../models/film-model");

router.use(express.json());

// returns screenplays in order
router.get("/", async (req, res) => {
  try {
    const film = await db.find();

    film.sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// post router
router.post("/", async (req, res) => {
  try {
    const film = await db.add(req.body);
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const film = await db.findById(req.params.id);
    if (film) {
      res.status(200).json(film);
    } else {
      res.status(500).json(error.message);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// file download functionality - static (how)? // for sure not working
// router.get("/download", function(req, res) {
//   const file = `${__dirname}/upload-folder/nameOfFile.png`; // have to target file name based of id
//   res.download(file);
// });

// when posting want to search the hitlist
//   if found on the hitlist, delete the new entry from the hitlist, if not found add anyways
//   search the title specifically

module.exports = router;
