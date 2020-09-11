const express = require("express");
const { post } = require("./usersController");
const category = require("../models/category");
const router = express.Router();
const User = require("../models").User;
const Category = require("../models").Category;
const TriviaModel = require("../models").TriviaQuestions;

// New route - send empty form
router.get("/new", (req, res) => {
  Category.findAll().then((allCategories) => {
    res.render("new.ejs", {
      categories: allCategories,
    });
  });
});

// index route   THIS ROUTE WORKS!
router.get("/", async (req, res) => {
  let triviaQuestions = await TriviaModel.findAll({
    order: ["id"],
  });
  res.json({ triviaQuestions });
});

// Add New Trivia Question  THIS ROUTE WORKS!
router.post("/", async (req, res) => {
  let newQuestion = await TriviaModel.create(req.body);
  res.json({ newQuestion });
});

// SHOW ROUTE - GET ONE Trivia Question    THIS ROUTE WORKS!
router.get("/:id", async (req, res) => {
  let foundQuestion = await TriviaModel.findByPk(req.params.id);
  res.json({ trivia: foundQuestion });
});

// router.get("/:id", function (req, res) {
//     TriviaModel.findByPk(req.params.id).then((foundQuestion) => {
//         Category.findByPk(foundQuestion.categoryId).then((allCategories) => {
//             res.render("show.ejs", {
//                 trivia: foundQuestion,
//                 categories: allCategories,
//             });
//         });
//     });
// });

// Edit Get a trvia question and just its category.  THIS ROUTE WORKS
router.get("/:id/edit", async (req, res) => {
  let foundQuestion = await TriviaModel.findByPk(req.params.id);
  let allCategory = await Category.findByPk(foundQuestion.categoryId);
  res.json({ trivia: foundQuestion, allCategory });
});

// EDIT  Get a trivia question and all categories.   THIS ROUTE WORKS
// router.get("/:id/edit", async (req, res) => {
//     let foundQuestion = await TriviaModel.findByPk(req.params.id);
//     let allCategory = await Category.findAll({
//         order: ["id"],
//     });
//     res.json({ trivia: foundQuestion, allCategory });
// });

// Perform the actual update of the data in the array
router.put("/:id", (req, res) => {
  console.log(req.body);

  TriviaModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((updatedTrivia) => {
    console.log("Trivia update");
    //  Category.findByPk(req.body.categoryId).then((foundCategory) => {
    //    TriviaModel.findByPk(req.params.id).then((foundQuestion) => {
    //      foundQuestion.addCategory(foundCategory);
    res.redirect("/trivia");
  });
  //  });
  //});
});

// Delete a trivia question  THIS ROUTE WORKS!
router.delete("/:id", async (req, res) => {
  await TriviaModel.destroy({
    where: { id: req.params.id },
  });
});

// router.delete("/:id", (req, res) => {
//     TriviaModel.destroy({ where: { id: req.params.id } }).then(() => {
//         res.redirect("/trivia");
//     });
// });

module.exports = router;
