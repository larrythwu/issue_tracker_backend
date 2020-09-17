const router = require("express").Router();
const auth = require("../middleware/auth");
const Quill = require("../models/quillModel");
const TA = require("../models/taCommentsModel");

router.get("/", auth, async (req, res) => {
  try {
    const text = await Quill.findOne({
      userId: res.locals.user,
    });

    if (!text) res.status(400).json({ message: "Not found" });
    res.json(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const contents = req.body.content;
    // console.log(contents);
    //validation
    if (!contents) return res.status(400).json({ message: "Fields empty" });

    const text = new Quill({
      userId: res.locals.user,
      content: contents,
    });

    //delete the old one and update the db with the new content
    const deleted = await Quill.remove({ userId: res.locals.user });
    const savedText = await text.save();
    res.json(savedText);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//used for post and get of TA's milestone comments
router.get("/taComments", auth, async (req, res) => {
  try {
    const comments = await TA.findOne({
      userId: res.locals.user,
    });

    if (!comments) res.status(400).json({ message: "Not found" });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/taComments", auth, async (req, res) => {
  try {
    const contents = req.body.content;
    // console.log(contents);
    //validation
    if (!contents) return res.status(400).json({ message: "Fields empty" });

    const comments = new TA({
      userId: res.locals.user,
      content: contents,
    });

    //delete the old one and update the db with the new content
    const deleted = await TA.remove({ userId: res.locals.user });
    const savedComments = await comments.save();
    res.json(savedComments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
