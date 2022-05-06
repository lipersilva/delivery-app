import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { PageHead } from '../components'


const Home: NextPage = () => {
  return (
    <>
      <PageHead title="Home" description="Sistema de Delivery" keywords="delivery, food"/>


      <div className= "">
        <h1>Home</h1>
        <Link href="/signup">
          <a>Cadastro</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </>
  )
}

export default Home
