import type { NextPage } from "next";
import Head from "next/head";
import { InputText, Button, PageHead } from "../components/"
import Link from 'next/link';

const Login: NextPage = () => {
  return (
    <>
      <PageHead title="Login" description="Sistema de Delivery" keywords="delivery, food"/>
      <div className= "h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-100 md:basis-full lg:basis-4/12 rounded-r-3xl">[imagem]</div>
        <div className="lg:basis-8/12 flex">
          <div className=" max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">
              Bem vindo!
            </h1>
            <p className="text-slate-700 mb-14">
              Autentique-se para continuar usando o serviço
            </p>
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
            <Button className="bg-indigo-50 w-full p-4  text-xl text-indigo-600 ">
              Login
            </Button>
            <div className="block text-center p-6">
              <Link href="/forgot">
                <a className="mt-6 text-center text-slate-600 mb-6 hover:text-slate-900">
                  Esqueceu sua senha?
                </a>
              </Link>
            </div>
            <Link href="/signup">
              <a className="bg-indigo-600 p-4 text-white text-xl mb-6 block w-full rounded-xl text-center hover:text-gray-300"> {/* #503E9D */}
                Criar uma conta
              </a>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default Login;
