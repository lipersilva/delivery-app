import type { NextPage } from 'next'
import { Highlights, Navbar, PageHead, Sidebar } from '../../components'
import { TypeParams, TypePageProps} from './types'

function Categories({id, children}:TypePageProps) {
  return (
    <>
      <PageHead 
        title={`${id} - Categoria do Restaurante XPTO`}
        description="Lista de Restaurantes da Categoria" 
        keywords="delivery, food"/>
      <div className= "container m-auto flex">
        <Sidebar/>
        <div className= "grow p-8" >
          <Navbar/>
          <Highlights title={id}/>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params}: TypeParams) {
  return {
    props: {
      id: params.id
    }
  }
}


export default Categories
