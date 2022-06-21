import React from 'react';
import { IconBase } from '../../icon';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '../../button';

export const SettingsUpdateProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlesSend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
      // alert('update profile'); //verificar alguma biblioteca com esse recurso, para fazer o loading (react-toastify)
    }, 3000);
  }

  return(
    <>
      <button onClick={() => setIsOpen(true)} >
        <>
          <div>
            <IconBase iconName="profile" color="#503E9D" size={24}  />
            Informações pessoais
          </div>
          <IconBase iconName="arrowRight" color="#A3A3A4" size={16}/>
        </>
      </button>
      <Dialog 
        open={isOpen} 
        onClose={()=>{setIsOpen(false)}}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/25">
          <Dialog.Panel className="w-[400px] p-8 rounded bg-white">
            <Dialog.Title as="h2" className="font-bold mb-8 flex justify-between items-center ">
              <div>Informações pessoais</div>
              <button onClick={() => setIsOpen(false)} >
                <IconBase iconName="close" color="#A3A3A4" size={16}/>
              </button>
            </Dialog.Title>
            <p>Imagem do perfil</p>
            <p>Detalhes do perfil</p>
            <Button 
              variant="primary" 
              isLoading={isLoading} 
              loadingMessage="Enviando..." 
              onClick={handlesSend} 
            >
              Atualizar Perfil
            </Button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
