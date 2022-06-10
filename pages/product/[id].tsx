import type { NextPage } from 'next'
import { FoodItem, PageTemplate } from '../../components'
import { ReactNode } from "react";

export type TypePageProps = {
  id: string;
  children?: ReactNode;
  product: {
    id: string;
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

function Product({id, children, product}:TypePageProps) {
  return (
    <PageTemplate
      title={`${product.name} - Restaurante XPTO`}
      description={`Descrição do ${product.name} no Restaurante XPTO`} 
      keywords={`${product.name}, Restaurante XPTO, XPTO`}
    >      
      <FoodItem {...product} />
    </PageTemplate>
  )
}

export async function getServerSideProps({ params}: TypeParams) {
  return {
    props: {
      id: params.id,
      product: {
        id: params.id,
        name: "Gigantic Rodeo Burger",
        imageUrl: '/foods/burger.jpg',
        deliveryFee: "$2.99 Delivery",
        rate:4.3,
        reviews: 104,
        category: "Burger",
        deliveryTime: "45 - 55 min",
      },
    },
  }
}

export default Product
