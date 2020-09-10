const express = require("express");
const category = require("../models/category");
const router = express.Router();
const CategoryModel = require("../models").Category;
const TriviaModel = require("../models").TriviaQuestions;

// index route
router.get("/", (req, res) => {
  CategoryModel.findAll({
    order: ["id"],
  }).then((categoryAll) => {
    res.render("categories/index.ejs", {
      category: categoryAll,
    });
  });
});

// New route - send empty form
router.get("/new", (req, res) => {
  res.render("categories/new.ejs");
});

// Add New Category
router.post("/", (req, res) => {
  CategoryModel.create(req.body).then((newCategory) => {
    console.log("New Category " + newCategory);
    console.log("req.body" + req.body);
    res.redirect("/categories");
  });
});

// SHOW ROUTE - GET ONE Category
router.get("/:id", function (req, res) {
  res.redirect("/categories");
  //  res.render("categories");
});

// Edit
router.get("/:id/edit", function (req, res) {
  CategoryModel.findByPk(req.params.id).then((foundCategory) => {
    res.render("edit.ejs", {
      category: foundCategory,
    });
  });
});

// Perform the actual UPDATE of the data in the table
router.put("/:id", (req, res) => {
  CategoryModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((category) => {
    console.log("Update record");
    console.log(req.body);
    res.redirect("/categories");
  });
});

router.delete("/:id", (req, res) => {
  CategoryModel.destroy({ where: { id: req.params.id } }).then(() => {
    console.log("delete route" + req.params.id);
    res.redirect("/categories");
  });
});

module.exports = router;
