import Link from 'next/link';
import React from 'react';
import { Category } from '../category';
import Styles from './styles.module.css'

export const Categories = () => {
  const categories = [
    {
      name: "Popular",
      legend: "286+ opções",
      iconName: "fire",
    },
    {
      name: "Delivery",
      legend: "1843+ opções",
      iconName: "motorcycle",
    },
    {
      name: "Alta Classe",
      legend: "25+ opções",
      iconName: "wallet",
    },
    {
      name: "Jantar em ",
      legend: "182+ opções",
      iconName: "knife",
    },
    {
      name: "Retirar em",
      legend: "3548+ opções",
      iconName: "store",
    },
    {
      name: "Mais próximo",
      legend: "44+ opções",
      iconName: "map",
    },
  ];
  return (
    <div className={Styles.header}>
      <div className="flex">
        <h2 className="grow font-bold mb-8">Explorar Categorias</h2>
        <Link href="./categories" >
          <a className="font-bold">Ver todas</a>
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