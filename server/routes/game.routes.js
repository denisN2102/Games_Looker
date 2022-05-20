const { Router } = require("express");
const Games = require("../models/Games");
const router = Router();

router.get("/getGames", async (req, res) => {
  try {
    const games = await Games.find({});
    res.json({ data: games });
  } catch (e) {
    res.status(500).json({ message: "Smth wrong,try again" });
  }
});

router.post("/addComments", async (req, res) => {
  try {
    const { game } = req.body;
    console.log(game);

    const game1 = await Games.updateOne(
      { title: game.title },
      { comment: game.comment }
    );

    const game2 = await Games.find({ title: game.title });

    res.status(201).json({ data: game2 });
  } catch (e) {
    res.status(500).json({ message: "Smth wrong,try again" });
  }
});

module.exports = router;
