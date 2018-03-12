/**
 * Created by nataliechen on 3/11/18.
 */
// create questions
var questions = [
    new Question("Who was the first president of the United States?", ["G.W.", "T.J."], "G.W."),
    new Question("What number does pi stand for?", ["3", "3.14"], "3.14")
];


// create quiz
var quiz = new Quiz(questions);


QuizUI.displayNext();