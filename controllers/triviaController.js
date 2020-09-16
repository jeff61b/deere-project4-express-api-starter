const express = require("express");
const { post } = require("./usersController");
const category = require("../models/category");
const router = express.Router();
const User = require("../models").User;
const Category = require("../models").Category;
const TriviaModel = require("../models").TriviaQuestions;

// New route - send empty form
// DON'T DELETE! Not sure if this is needed.
// router.get("/new", (req, res) => {
//   Category.findAll().then((allCategories) => {
//     res.render("new.ejs", {
//       categories: allCategories,
//     });
//   });
// });

// index route - get all trivia questions   THIS ROUTE WORKS!
router.get("/", async (req, res) => {
  let triviaQuestions = await TriviaModel.findAll({
    order: ["id"],
    include: Category,
  });
  res.json({ triviaQuestions });
  console.log("Get all trivia questions");
  //res.json({ message: "Get all trivia questions" });
});

// Add New Trivia Question  THIS ROUTE WORKS!
router.post("/", async (req, res) => {
  let newQuestion = await TriviaModel.create(req.body);
  res.json({ newQuestion });
});

// SHOW ROUTE - Get one specific Trivia Question    THIS ROUTE WORKS!
router.get("/:id", async (req, res) => {
  let foundQuestion = await TriviaModel.findByPk(req.params.id, {
    include: Category,
  });
  res.json({ trivia: foundQuestion });
});

// router.get("/:id", async (req, res) => {
//   let foundQuestion = await TriviaModel.findByPk(req.params.id);
//   res.json({ trivia: foundQuestion });
// });

// Edit - Get a trvia question and just its category.  THIS ROUTE WORKS
router.get("/:id/edit", async (req, res) => {
  let foundQuestion = await TriviaModel.findByPk(req.params.id);
  let allCategory = await Category.findByPk(foundQuestion.categoryId);
  res.json({ trivia: foundQuestion, allCategory });
});

// Update a record and return the trivia question and category. THIS ROUTE WORKS
router.put("/:id", async (req, res) => {
  let updatedTrivia = await TriviaModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let triviaQuestion = await TriviaModel.findByPk(req.params.id, {
    include: Category,
  });
  res.json({ triviaQuestion });
});

// Delete a trivia question  THIS ROUTE WORKS!
router.delete("/:id", async (req, res) => {
  await TriviaModel.destroy({
    where: { id: req.params.id },
  });
});

module.exports = router;
