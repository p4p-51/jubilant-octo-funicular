export default interface QuizQuestion {
  title: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  isCorrect: true;
}
