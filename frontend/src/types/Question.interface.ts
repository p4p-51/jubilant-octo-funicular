export interface QuestionInterface {
  questionText: string;
  id: string;
}
export default interface Question {
  questionId: number;
  questionText: string;
  labelId: string;
  experiences: Experience[];
  answers?: Answer[];
}

export interface QuestionResponse extends Question {
  answerCount: number;
}

export interface Experience {
  id: string;
  name: string;
  labels: string[];
  experienceId?: number;
}

export interface Answer {
  experienceId: number;
  answer: {
    s: string;
    t: string;
    a: string;
    r: string;
  };
  experience?: Experience
  questionId?: number
}

export interface Label {
  key: string;
  statement: string;
}
