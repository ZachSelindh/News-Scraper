const express = require("express");
var router = express.Router();

// Scraping and display tools
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("../models");

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/saved", function(req, res) {
  res.render("saved");
});

router.get("/scrape/nyt", function(req, res) {
  axios.get("https://www.nytimes.com/").then(function(response) {
    var $ = cheerio.load(response.data);
    $("article h2").each(function(i, element) {
      // Save the text of the h4-tag as "title"
      var results = [];
      var articleSource = "NYT";
      var title = $(element).text();

      var subhead = $(element)
        .parent()
        .siblings("ul")
        .children("li")
        .first()
        .text();

      if (subhead === "") {
        var subhead = $(element)
          .parent()
          .siblings("p")
          .first()
          .text();
      }

      // Find the h4 tag's parent a-tag, and save it's href value as "link"
      var link = $(element)
        .parent()
        .parent()
        .attr("href");

      // Make an object with data we scraped for this h4 and push it to the results array
      results.push({
        title,
        subhead,
        link: "https://www.nytimes.com/" + link,
        articleSource
      });

      db.Article.create(results)
        .then(function(dbArticle) {})
        .catch(function(err) {
          console.log(err);
        });
    });
  });
});

router.get("/articles", function(req, res) {
  db.Article.find({})
    .then(function(dbArticle) {
      var hbsObject = {
        Articles: dbArticle
      };
      res.render("index", hbsObject);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
