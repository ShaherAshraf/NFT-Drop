class Questions {
  constructor() {
    this.questions = document.querySelectorAll('.question');
    this.events();
  }

  events() {
    this.questions.forEach((question) => question.addEventListener('click', this.toggleQuestion.bind(this)));
  }

  toggleQuestion(e) {
    const question = e.target.closest('.question');
    question.classList.toggle('question--closed');
  }
}

export default Questions;
