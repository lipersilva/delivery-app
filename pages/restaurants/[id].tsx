import Image from "next/image";
import { PageTemplate, DetailsItem, FoodsList, IconBase } from "../../components";
import Styles from './restaurant.module.css'
import { ReactNode } from "react";

export type TypePageProps = {
  id: string;
  children?: ReactNode;
}

export type TypeParams = {
  params: {
    id: string;
  }
}


function Restaurant({ id, children }: TypePageProps) {
  return (
    <PageTemplate 
      title="Restaurant - Burguer King" 
      description="Restaurante Burguer King"
      keywords="delivery, food, Restaurant, Burguer King"
    >

      <div className={Styles.header}>
        <div className={Styles.cover}>
          <div className={Styles.image}>
            <Image src="/cover.jpg" layout="fill" alt="Capa"/>
          </div>
          <div className={Styles.brand}>
            <Image src="/brands/burguer-king.svg" width={96} height={96} alt="Logo" />
          </div>
          <button className={Styles.favouriteButton}>
            <IconBase iconName="heart" size={20} color="#000"/>
          </button>
        </div>
        <div className={Styles.details}>
          <div className="flex flex-col md:flex-row mb-3">
            <h1>Burguer King</h1>
            <div className={Styles.tags}>
                <span className="tag-purple">Entrega Grátis</span>
                <span className="tag-orange">Compre 1 leve 2</span>
                <span className="tag-gray">Abre às 12h</span>
            </div>
          </div>
          <p>It is one of the most iconic and well-recognizable fast food restaurants out there which offers really amazing food and drinks.</p>
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
    </PageTemplate>
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