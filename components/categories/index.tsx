import Link from 'next/link';
import React from 'react';
import { Category } from '../category';
import { IconArrowRight } from '../icon-family';
import Styles from './styles.module.css'

export const Categories = () => {
  const categories = [
    {
      name: "Popular",
      legend: "286+ opções",
      iconName: "fire",
      backgroundSection:"#FB6D3A"
    },
    {
      name: "Delivery",
      legend: "1843+ opções",
      iconName: "motorcycle",
      backgroundSection:"#503E9D"
    },
    {
      name: "Alta Classe",
      legend: "25+ opções",
      iconName: "wallet",
      backgroundSection:"#FACD5D"
    },
    {
      name: "Jantar",
      legend: "182+ opções",
      iconName: "knife",
      backgroundSection:"#FB6D3A"
    },
    {
      name: "Retirar em",
      legend: "3548+ opções",
      iconName: "store",
      backgroundSection:"#503E9D"
    },
    // {
    //   name: "Mais próximos",
    //   legend: "44+ opções",
    //   iconName: "map",
    //   backgroundSection:"#FACD5D"
    // },
  ];
  return (
    <div>
      <div className={Styles.header}>
        <h2>Explorar Categorias</h2>
        <Link href="./categories" >
          <a>
            Ver todas
            <IconArrowRight size="12" color="#503E9D"/> 
          </a>
        </Link>
      </div>
      <div className="flex gap-6 justify-between">
        {categories.map((category)=>(
          <Category key={category.name} {...category} /> 
        ))}
      </div>
    </div>
  );
}