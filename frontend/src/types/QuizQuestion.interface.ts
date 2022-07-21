export default interface QuizQuestion {
  title: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}
