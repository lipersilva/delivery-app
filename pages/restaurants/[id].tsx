import { NextPage } from "next";
import { DetailsItem, FoodsList, Navbar, PageHead, Sidebar } from "../../components";
import Styles from './restaurant.module.css'
import { TypePageProps, TypeParams } from "./types";



function Restaurant({ id, children }: TypePageProps) {
  return (
    <>
      <PageHead title="Restaurante - Burguer King" description="Restaurante Burguer King" keywords="delivery, food"/>
      <div className= "container m-auto flex">
        <Sidebar/>
        <div className= "grow p-8" >
          <Navbar/>
          <div>{id}</div>
          <div className={Styles.header}>
            <div className={Styles.details}>
              <h1>Burguer King</h1>
              <p>It is one of the most iconic and well-recognizable fast food restaurants out there which offers really amazing food and drinks.</p>
            </div>
            <div className={Styles.tags}>
              <div>
                <span>Entrega Grátis</span>
                <span>Compre 1 leve 2</span>
                <span>Abre às 12h</span>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <DetailsItem 
              rate={4.5} 
              reviews={1.873} 
              category="Burguer" 
              price={1} 
              distance="4,3 km (Irving St, San Francisco, California)"
            /> 
          </div>
          <FoodsList/>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps ({ params }: TypeParams) {
  return {
    props: {
      id: params.id,
    }
  }
}

export default Restaurant;