export type Question = {
  id: number;
  text: string;
  varaints: Array<number|string>;
  answer: number|string;
};

export type Answer = {
  [key: string|number]: number | string;
};