import Link from 'next/link';
import React from 'react';
import Styles from './styles.module.css'
import { IconBase } from '../icon'
import { UserProfile } from '../user-profile';
import Image from 'next/image';

export const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.header}>
          <span>
            <Image src="/logo.png" width={40} height={32} alt="Delivery App " />
          </span>
          <h3>Nibble</h3>
      </div>
      <ul className={Styles.menu}>
        <li className={Styles.active}>
          <Link href="/">
            <a>
              <IconBase iconName="home" color="#A3A3A4" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/explorer">
            <a>
              <IconBase iconName="feed" color="#A3A3A4" />
              <span>Explorar</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/favoritos">
            <a>
              <IconBase iconName="bookmark" color="#A3A3A4"/>
              <span>Favoritos</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <IconBase iconName="document" color="#A3A3A4"/>
              <span>Pedidos</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <IconBase iconName="mail" color="#A3A3A4" />
              <span>Mensagens</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <IconBase iconName="gear" color="#A3A3A4" />
              <span>Configurações</span>
            </a>
          </Link>
        </li>
      </ul>
      <div className={Styles.footer}>
        <div>
          <UserProfile/>
        </div>
      </div>
      <p className="text-gray-100">Sidebar</p>
    </div>
  )
}