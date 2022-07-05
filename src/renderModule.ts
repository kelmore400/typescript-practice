import { Question } from "./types";

export class RenderModule {
  static renderQuestion(question: Question) {
    const container = document.createElement(`div`);
    const text = document.createElement(`p`);
    text.innerHTML = `${question.id}. ${question.text}`;
    const variants = document.createElement(`div`);
    variants.className = "quiz";

    for (const item of question.varaints) {
      const label = document.createElement(`label`);
      const radio = document.createElement(`input`);
      label.setAttribute('for', `${item}`);
      radio.setAttribute('type', 'radio');
      radio.setAttribute("required", "");
      radio.setAttribute('name', `${question.id}`);
      radio.setAttribute('value', `${item}`);
      radio.setAttribute('id', `${item}`);
      label.append(radio);
      label.append(`${item}`);
      variants.append(label);
    }
    container.append(text);
    container.append(variants);
    return container;
  }
  static renderForm(id: number|string, questions: Question[]) {
    const container = document.querySelector(`#${id}`);
    const form = document.createElement(`form`);
    questions.map((item) => {
      form.append(RenderModule.renderQuestion(item));
    });
    const submitBtn = document.createElement(`button`);
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Отправить';
    form.append(submitBtn);
    container!.append(form);
    return form;
  }
}