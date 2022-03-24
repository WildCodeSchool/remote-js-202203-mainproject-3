import { Question } from './Question';
import { Answer } from './Answer';

export class QuizzList {
  constructor(quizzlist) {
      this.quizzlist = quizzlist;
      this.newquizzlist = [];
  }

  setNewQuizzList (){
    const list_qa = ['answer_a', 'answer_b', 'answer_c', 'answer_d', 'answer_e', 'answer_f'];
    for (const quizz of this.quizzlist) {
      const question = new Question(quizz.id, quizz.question, quizz.category, quizz.tags[0].name, 
          quizz.difficulty, (quizz.multiple_correct_answers.toLowerCase() === 'true') ? true : false , quizz.correct_answer);
      const answers = quizz.answers;
      const c_answers = quizz.correct_answers;
      let correct_answer = [];
      let i = 0;
      while (i < list_qa.length) {
        if (!answers[list_qa[i]]) {break; }
        const answer = new Answer(list_qa[i], answers[list_qa[i]], 
                      c_answers[list_qa[i] + '_correct'].toLowerCase() === 'true' ? true : false, false);
        question.answers.push(answer);
        if (c_answers[list_qa[i] + '_correct'] === 'true') {
          correct_answer.push(list_qa[i]);
        }
        i++;
      }
      if (question.multiple_correct_answers) {
        question.correct_answer = correct_answer;}
      if (!question.multiple_correct_answers && correct_answer.length > 0) {
        question.correct_answer = correct_answer[0];}
      this.newquizzlist.push(question);
    }
    // return this.newquizzlist;
  }
}