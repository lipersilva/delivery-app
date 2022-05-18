import type { NextPage } from 'next'
import {FoodsList, Highlights, Navbar, PageHead, Sidebar } from '../components'


const Explorer: NextPage = () => {
  return (
    <>
      <PageHead title="Explorar Restaurantes" description="Página Explorar - Sistema de Delivery" keywords="delivery, food"/>
      <div className= "container m-auto flex">
        <Sidebar/>
        <div className= "grow p-8" >
          <Navbar/>
          <Highlights title="Restaurantes próximos"/>
          <FoodsList/>
        </div>
      </div>
    </>
  )
}

export default Explorer
