import type { NextPage } from 'next'
import { Categories, FoodsList, Highlights, Navbar, PageHead, PageTemplate, Sidebar } from '../components'


const Home: NextPage = () => {
  return (
    <PageTemplate
      title="Nibble Restaurantes" 
      description="Sistema de Delivery" 
      keywords="delivery, food"
    >
      <Categories/>
      <Highlights/>
      <FoodsList/>
    </PageTemplate>
  )
}

export default Home
