export interface Author {
  name: string;
  intro: string;
  avatar: string;
}

export interface Price {
  market: number;
  sale: number;
}

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  author: Author;
  price: Price;
  unit: string;
}
