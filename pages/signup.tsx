import type { NextPage } from 'next'
import Link from 'next/link'
import { Button, InputText, PageHead } from '../components'

const SingUp: NextPage = () => {
  return (
    <>
      <PageHead title="Cadastro" description="Sistema de Delivery" keywords="delivery, food"/>

      <div className= "h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-100 md:basis-full lg:basis-4/12 rounded-r-3xl">[imagem]</div>
        <div className="lg:basis-8/12 flex">
          <div className=" max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">
              Criar uma conta
            </h1>
            <p className="text-slate-700 mb-14">
              Por favor crie uma conta para continuar utilizando os nossos serviços.
            </p>
            <InputText 
              label="Nome Completo"  
              placeholder="Informe seu nome" 
              type="text"
            />
            <InputText 
              label="Endereço de E-mail" 
              placeholder="Informe seu e-mail" 
              type="email"  
            />
            <InputText 
              label="Senha" 
              placeholder="Informe a senha" 
              type="password"  
            />
            <Button className="bg-indigo-600 w-full p-4 text-white font-bold text-xl rounded-xl">
              Criar uma conta
            </Button>
            <p className="mt-6 text-center text-slate-700 mb-14">
              Você já tem uma conta? {" "}
              <Link href="/login">
                <a className="mt-6 text-center text-orange-600 font-bold hover:text-orange-900">
                  Acesse aqui.
                </a>
              </Link>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default SingUp
