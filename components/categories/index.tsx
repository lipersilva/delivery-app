import Link from 'next/link';
import React from 'react';
import { Category } from '../category';
import Styles from './styles.module.css'

export const Categories = () => {
  const categories = [
    {
      name: "Popular",
      legend: "+286 opções",
      iconName: "fire",
    },
    {
      name: "Delivery",
      legend: "+1843 opções",
      iconName: "bike",
    },
    {
      name: "Alta Classe",
      legend: "+25 opções",
      iconName: "wallet",
    },
  ];
  return (
    <div className={Styles.header}>
      <div className="flex">
        <h2 className="grow">Explorar Categorias</h2>
        <Link href="./ctegories" >
          <a>Ver todas</a>
        </Link>
      </div>
      <div className="flex gap-8">
        {categories.map((category)=>(
          <Category key={category.name} {...category} /> 
        ))}
      </div>
      
    </div>
  )
}