/**
 * Created by nataliechen on 3/11/18.
 */
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;

}

Question.prototype.isCorrectAnswer = function(choice){
    return this.answer === choice;
};

