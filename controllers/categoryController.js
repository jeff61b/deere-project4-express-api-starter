const express = require("express");
const category = require("../models/category");
const router = express.Router();
const CategoryModel = require("../models").Category;
const TriviaModel = require("../models").TriviaQuestions;

// index route - Get all categories   THIS ROUTE WORKS
router.get("/", async (req, res) => {
  let categoryAll = await CategoryModel.findAll({
    order: ["id"],
  });
  res.json({ categoryAll });
});

// router.get("/", (req, res) => {
//   CategoryModel.findAll({
//     order: ["id"],
//   }).then((categoryAll) => {
//     res.render("categories/index.ejs", {
//       category: categoryAll,
//     });
//   });
// });

// New route - send empty form
// router.get("/new", (req, res) => {
//   res.render("categories/new.ejs");
// });

// Add New Category   THIS ROUTE WORKS
router.post("/", async (req, res) => {
  let newCategory = await CategoryModel.create(req.body);
  res.json({ newCategory });
});

// SHOW ROUTE - GET ONE Category    THIS ROUTE WORKS
router.get("/:id", async (req, res) => {
  let foundCategory = await CategoryModel.findByPk(req.params.id);
  res.json({ category: foundCategory });
});

// Edit. Get category to edit.  THIS ROUTE WORKS
router.get("/:id/edit", async (req, res) => {
  let foundCategory = await CategoryModel.findByPk(req.params.id);
  res.json({ category: foundCategory });
});

// Perform the actual UPDATE of the category.   THIS ROUTE WORKS
router.put("/:id", async (req, res) => {
  let updatedCategory = await CategoryModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let foundCategory = await CategoryModel.findByPk(req.params.id);
  res.json({ category: foundCategory });
});

//Delete a category.
router.delete("/:id", async (req, res) => {
  await CategoryModel.destroy({
    where: { id: req.params.id },
  });
});

module.exports = router;
