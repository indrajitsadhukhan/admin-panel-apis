const router = require("express").Router();
let Quiz = require("../models/quiz.model");

router.route("/").get((req, res) => {
  Quiz.find()
    .then((quiz) => res.json(quiz))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const Question = req.body.Question;
  const OptionA = req.body.OptionA;
  const OptionB = req.body.OptionB;
  const OptionC = req.body.OptionC;
  const Answer = req.body.Answer;

  const newQuiz = new Quiz({ id,Question, OptionA, OptionB, OptionC, Answer });
  newQuiz
    .save()
    .then(() => res.json("Quizes Added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Quiz.findById(req.params.id)
    .then((quiz) => res.json(quiz))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Quiz.findByIdAndDelete(req.params.id)
    .then(() => res.json("Quiz deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Quiz.findById(req.params.id)
    .then((quiz) => {
      quiz.id = req.body.id;
      quiz.Question = req.body.Question;
      quiz.OptionA = req.body.OptionA;
      quiz.OptionB = req.body.OptionB;
      quiz.OptionC = req.body.OptionC;
      quiz.Answer = req.body.Answer;

      quiz
        .save()
        .then(() => res.json("Quiz updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
