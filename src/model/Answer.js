export class Answer {
  constructor(id, answer, correct_answer, user_answer=false) {
      this.id = id; // key of answer in [answer_a, answer_b,...]
      this.answer = answer; // value of answer
      this.correct_answer = correct_answer; // boolean
      this.user_answer = user_answer;  // boolean
      this.answers = [];
  }

  checkAnswer() {
    if (this.correct_answer) {
        if (this.correct_answer === this.user_answer) {
          return true;
        }
    }
    return false;
  }

}