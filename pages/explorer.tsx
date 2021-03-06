import type { NextPage } from 'next'
import {FoodsList, Highlights,PageTemplate } from '../components'


const Explorer: NextPage = () => {
  return (
    <PageTemplate
      title="Explorar - Categoria de Restaurante" 
      description="Página Explorar - Sistema de Delivery" 
      keywords="delivery, food"
    >
      <Highlights title="Restaurantes próximos"/>
      <FoodsList/>
    </PageTemplate>
  )
}

export default Explorer;
