export default interface QuizQuestion {
  title: string;
  options: QuizOption[];
  answer: string;
}

export interface QuizOption {
  id: string;
  text: string;
  explanation: string;
}
