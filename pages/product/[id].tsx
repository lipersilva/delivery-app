import type { NextPage } from 'next'
import { FoodItem, PageTemplate } from '../../components'
import { TypeParams, TypePageProps} from './types'

function Categories({id, children, product}:TypePageProps) {
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

export default Categories
