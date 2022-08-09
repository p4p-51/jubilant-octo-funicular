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
  experienceId?: number;
  name: string;
  labels: string[];
}

export interface Answer {
  experienceId: number;
  answer: {
    s: string;
    t: string;
    a: string;
    r: string;
  };
  experience?: Experience;
  questionId?: number;
}

export interface Label {
  label: string;
  labelText: string;
}
