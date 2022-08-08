export interface QuestionInterface {
  questionText: string;
  id: string;
}
export default interface Question {
  questionId: number;
  questionText: string;
  label: string;
  experiences: Experience[];
  responses?: Response[];
}

export interface Experience {
  id: string;
  title: string;
  labels: string[];
}

export interface Response {
  experience: Experience;
  response: {
    s: string;
    t: string;
    a: string;
    r: string;
  };
}

export interface Label {
  key: string;
  statement: string;
}
