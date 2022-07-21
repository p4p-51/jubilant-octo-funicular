export default interface Question {
  id: string;
  title: string;
  label: string;
  experiences: Experience[];
  responses: Response[];
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
