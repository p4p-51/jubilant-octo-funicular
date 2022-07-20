export default interface Question {
  id: string;
  title: string;
  label: string;
  responses: Response[];
}

export interface Response {
  situationId: string;
  response: {
    s: string;
    t: string;
    a: string;
    r: string;
  };
}
