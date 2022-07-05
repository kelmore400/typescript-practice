import { RenderModule } from "./renderModule";
import { Validator } from "./validator";
import { Question } from "./types";

export class Test {

  id: string = "test";
  questions: Question[];
  resultElement: HTMLElement|undefined = undefined;
  form: HTMLFormElement|undefined = undefined;

  constructor(questions: Question[]) {
    this.questions = questions;
    this.form = RenderModule.renderForm(this.id, questions);
    this.resultElement = document.createElement(`p`);
    this.form.append(this.resultElement);
    this.addingListeners();
  }

  addingListeners() {
    this.form!.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(document.querySelector('form') as HTMLFormElement)
      const values = Object.fromEntries(formData);
      this.resultElement!.innerHTML = Validator.checkResults(values, this.questions);
    });
  }
}