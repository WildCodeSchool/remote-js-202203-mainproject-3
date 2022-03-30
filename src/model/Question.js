export class Question {
  constructor(id, question, category, difficulty, multiple_correct_answers, correct_answer) {
      this.id = id;
      this.question = question;
      this.category = category;
      this.difficulty = difficulty;
      this.multiple_correct_answers = multiple_correct_answers;
      this.correct_answer = correct_answer; //
      this.answers = [];
  }

  addAnswer(answer) {
      this.answers.push(answer);
  }
}