import { ReactNode } from "react";

export type TypePageProps = {
  id: string;
  children?: ReactNode;
  product: {
    name: string,
    imageUrl: string,
    deliveryFee: string,
    rate:number,
    reviews: number,
    category: string,
    deliveryTime: string,
  }
}

export type TypeParams = {
  params: {
    id: string;
  }
}
