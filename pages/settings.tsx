import type { NextPage } from "next";
import { PageTemplate } from "../components";
import Link from "next/link";
import { IconMail, IconDiscount, IconBookmark, IconArrowRight, IconProfile  } from "../components/icon-family"
import Styles from "../styles/settings.module.css";
import { IconBase } from "../components";

const Settings: NextPage = () => {
  return (
    <PageTemplate 
      title="Configurações - Sistema de Delivery"
      description="Configurações do usuário no Nibble - Sistema de Delivery"
    >
      <div className={Styles.container}>
        <h1>Configurações</h1>
        <h2>Geral</h2>
        <ul>
          <li>
            <Link href="#" >
              <a>
                <div>
                  <IconBase iconName="profile" color="#503E9D" size={24}  />
                  Informações pessoais
                </div>
                <div><IconBase iconName="arrowRight" color="#A3A3A4" size={16}/></div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" >
              <a>
                <div>
                  <IconBase iconName="bookmark" color="#FB6D3A" size={24} />
                  Endereços salvos
                </div>
                <div><IconBase iconName="arrowRight" color="#A3A3A4" size={16}/></div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" >
              <a>
                <div>
                  <IconBase iconName="mail" color="#FACD5D" size={24} />
                  Preferências de Marketing
                </div>
                <div><IconBase iconName="arrowRight" color="#A3A3A4" size={16}/></div>
              </a>
            </Link>
          </li>
        </ul>
        <h2>Pagamentos</h2>
        <ul>
          <li>
            <Link href="#" >
              <a>
                <div>
                  <IconBase iconName="paymentMethod" color="#503E9D" size={24}  />
                  Métodos de pagamentos
                </div>
                <div><IconBase iconName="arrowRight" color="#A3A3A4" size={16}/></div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" >
              <a>
                <div>
                  <IconBase iconName="card" color="#FB6D3A" size={24} />
                  Meus cartões
                </div>
                <div><IconBase iconName="arrowRight" color="#A3A3A4" size={16}/></div>
              </a>
            </Link>
          </li>
        </ul>
        <h2>Outros</h2>
        <ul>
          <li>
            <Link href="#" >
              <a>
                <div>
                  <IconBase iconName="support" color="#503E9D" size={24}  />
                  Suporte
                </div>
                <div><IconBase iconName="arrowRight" color="#A3A3A4" size={16}/></div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" >
              <a>
                <div>
                  <IconBase iconName="splitOrder" color="#FB6D3A" size={24} />
                  Convide um amigo
                </div>
                <div><IconBase iconName="arrowRight" color="#A3A3A4" size={16}/></div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" >
              <a>
                <div>
                  <IconBase iconName="money" color="#FACD5D" size={24} />
                  Descontos
                </div>
                <div><IconBase iconName="arrowRight" color="#A3A3A4" size={16}/></div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </PageTemplate>
  )
}

export default Settings;