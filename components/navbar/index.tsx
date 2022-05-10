import React from 'react';
import Styles from './styles.module.css'

export const Navbar = () => {
  return(
    <div className={Styles.navbar}>
      <div className="flex items-center">
        <div className="">San Francisco, California</div>
        <div>Retirar</div>
        <div>Ofertas</div>
      </div>
      <input className={Styles.inputSearch} placeholder='Pesquise Aqui' />
      <div>
        <button>Filtros</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}