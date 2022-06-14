import Link from 'next/link';
import React from 'react';
import { IconTargetLocation, IconShoppingCart, IconShoppingBag, IconFilter, IconArrowTopDown} from '../icon-family';
import { SearchInput } from '../search-input';
import Styles from './styles.module.css';
import { useFilter } from "../../stores";
import { OffersFilter } from "./offers-filter-dropdown"
import { LocationsFilter } from './locations-filter-dropdown';
import { PickupFilter } from './pickup-dropdrown';

export const Navbar = () => {
  const { toggleModal } = useFilter(store => store);

  return(
    <div className={Styles.navbar}>
      <ul className={Styles.nav}>
        <li>
          <LocationsFilter/>
        </li>
        <li>
          <PickupFilter/>
        </li>
        <li>
          <OffersFilter/>
        </li>
      </ul>
      <SearchInput/>
      <ul className={Styles.navButtons}>
        <li>
          <button className={Styles.filterButton} onClick={() => toggleModal()}>
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