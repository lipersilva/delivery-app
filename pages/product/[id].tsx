import type { NextPage } from 'next'
import { FoodItem, Navbar, PageHead, Sidebar } from '../../components'
import { TypeParams, TypePageProps} from './types'

function Categories({id, children, product}:TypePageProps) {
  return (
    <>
      <PageHead 
        title={`${product.name} - Restaurante XPTO`} 
        description={`Descrição do ${product.name} no Restaurante XPTO`} 
        keywords="delivery, food"/>
      <div className= "container m-auto flex">
        <Sidebar/>
        <div className= "grow p-8" >
          <Navbar/>
          <FoodItem {...product} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params}: TypeParams) {
  return {
    props: {
      id: params.id,
      product: {
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