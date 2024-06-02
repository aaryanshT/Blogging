const express = require("express");
const app = express();
const router = app.router();
const content = require("../models/Content");

//adding a new blog
router.post("/blog", async (req, res) => {
  try {
    const { title, body, author, createdAt, updatedAt } = req.body;
    if (!title || !body || !author) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newBlog = new content({
      title,
      body,
      author,
      createdAt, 
      updatedAt
    });

    await newBlog.save();

    return res.status(201).json({ message: "Blog saved successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;