import { Question } from "./types";

export class Validator {
  static checkResults(values: any, questions: Question[]) {
    let validAnswersCounter: number = 0;
    const total = questions.length;
    for (const id in values) {
      const answer = values[id];
      const question = questions.find((item) => item.id.toString() == id.toString());
      if(question!.answer === answer) {
        validAnswersCounter++;
      }
    }
    const percent = (validAnswersCounter / total) * 100;
    return `${percent >= 70 
      ? `Congradulations! You have passed this quiz! Your score is ${percent}%.` 
      : `Unfortunatly, you didn't pass this quiz. Your score is ${percent}%.`}`
  }
}