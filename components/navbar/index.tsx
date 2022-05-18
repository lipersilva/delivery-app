import Link from 'next/link';
import React from 'react';
import { IconTargetLocation, IconShoppingCart, IconShoppingBag, IconFilter, IconDiscount, IconArrowTopDown} from '../icon-family';
import { SearchInput } from '../search-input';
import Styles from './styles.module.css'

export const Navbar = () => {
  return(
    <div className={Styles.navbar}>
      {/* <div className="flex items-center"> */}
        <ul className={Styles.nav}>
          <li>
              <Link href="" >
                <a>
                  <IconTargetLocation size={24} color="#503E9D"/>
                  San Francisco, California
                  <IconArrowTopDown size={16} color="#000000"/>
                </a>
              </Link>
          </li>

          <li>
            <Link href="">
              <a>
                <IconShoppingBag size={24} color="#FB6D3A"/>
                Retirar
                <IconArrowTopDown size={16} color="#000000"/>
              </a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a>
                <IconDiscount size={24} color="#FACD5D"/>
                Ofertas
                <IconArrowTopDown size={16} color="#000000"/>
              </a>
            </Link>
          </li>
        </ul>
      {/* </div> */}
      <SearchInput/>
      <ul className="flex">
        <li>
          <button className={Styles.filterButton}>
            <IconFilter size={36} color="#ffffff"/>
          </button>
        </li>
        <li>
          <button className={Styles.cartButton}>
            <IconShoppingCart size={36} color="#fffff"/>
          </button>
        </li>
      </ul>
    </div>
  );
}