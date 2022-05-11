import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Categories, Highlights, Navbar, PageHead, Sidebar } from '../components'


const Home: NextPage = () => {
  return (
    <>
      <PageHead title="Home" description="Sistema de Delivery" keywords="delivery, food"/>


      <div className= "container m-auto flex">
        <Sidebar/>
        <div className= "grow p-8 " >
          <Navbar/>
          <Categories/>
          <Highlights/>
        </div>
      </div>
    </>
  )
}

export default Home
