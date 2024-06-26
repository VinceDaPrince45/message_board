var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messageboard', messages: messages });
});

// GET new route
router.get("/new", function(req,res,next) {
  res.render('form', {title: "New Message Form"});
});

router.post("/new", function(req,res,next) {
  const { author, message } = req.body;
  messages.push({text:message,user:author,added: new Date()});
  res.redirect("/");
})



module.exports = router;
