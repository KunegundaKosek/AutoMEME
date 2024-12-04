export interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}

export interface Confession {
  id: number;
  content: string;
  date: string;
}

export interface Video {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

export interface Question {
  id: number;
  question: string;
  answers: string[];
}