import type { NextPage } from "next";
import { PageTemplate, SettingsMarketingPreferences, SettingsSavedAddress, SettingsUpdateProfile } from "../components";
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
        <p>Geral</p>
        <ul>
          <li>
            <SettingsUpdateProfile/>
          </li>
          <li>
            <SettingsSavedAddress/>
          </li>
          <li>
            <SettingsMarketingPreferences/>
          </li>
        </ul>
        <h2>Pagamentos</h2>
        <ul>
          <li>
            <button onClick={() => {} } >
              <>
                <div>
                  <IconBase iconName="paymentMethod" color="#503E9D" size={24}  />
                  Métodos de pagamentos
                </div>
                <IconBase iconName="arrowRight" color="#A3A3A4" size={16}/>
              </>
            </button>
          </li>
          <li>
            <button onClick={() => {} } >
              <>
                <div>
                  <IconBase iconName="card" color="#FB6D3A" size={24} />
                  Meus cartões
                </div>
                <IconBase iconName="arrowRight" color="#A3A3A4" size={16}/>
              </>
            </button>
          </li>
        </ul>
        <h2>Outros</h2>
        <ul>
          <li>
            <button onClick={() => {} } >
              <>
                <div>
                  <IconBase iconName="support" color="#503E9D" size={24}  />
                  Suporte
                </div>
                <IconBase iconName="arrowRight" color="#A3A3A4" size={16}/>
              </>
            </button>
          </li>
          <li>
            <button onClick={() => {} } >
              <>
                <div>
                  <IconBase iconName="splitOrder" color="#FB6D3A" size={24} />
                  Convide um amigo
                </div>
                <IconBase iconName="arrowRight" color="#A3A3A4" size={16}/>            
              </>
            </button>
          </li>
          <li>
            <button onClick={() => {}} >
              <>
                <div>
                  <IconBase iconName="money" color="#FACD5D" size={24} />
                  Descontos
                </div>
                <IconBase iconName="arrowRight" color="#A3A3A4" size={16}/>
              </>
            </button>
          </li>
        </ul>
      </div>
    </PageTemplate>
  )
}

export default Settings;