import Link from 'next/link';
import React from 'react';
import Styles from './styles.module.css'
import { IconBase } from '../icon'

export const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.header}>
        <p>
          <span>[icon]</span>
          Nibble
        </p>
      </div>
      <ul className={Styles.menu}>
        <li className={Styles.active}>
          <Link href="/">
            <a>
              <span>
                <IconBase iconName="home" color="#A3A3A4" />
              </span>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/exporar">
            <a>
              <span><IconBase iconName="feed" color="#A3A3A4" /></span>
              
              Explorar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/favoritos">
            <a>
              <span><IconBase iconName="bookmark" color="#A3A3A4"/></span>
              Favoritos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span><IconBase iconName="document" color="#A3A3A4"/></span>
              Pedidos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span><IconBase iconName="mail" color="#A3A3A4" /></span>
              Mensagens
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span><IconBase iconName="gear" color="#A3A3A4" /></span>
              Configurações
            </a>
          </Link>
        </li>
      </ul>
      <div className={Styles.footer}>
        <div>
          componente usuário
        </div>
      </div>
      <p className="text-gray-100">Sidebar</p>
    </div>
  )
}