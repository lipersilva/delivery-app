import type { NextPage } from 'next'
import { Highlights, PageTemplate } from '../../components'
import { TypeParams, TypePageProps} from './types'

function Categories({id, children}:TypePageProps) {
  return (
    <PageTemplate 
      title={`${id} - Categoria do Restaurante XPTO`}
      description="Lista de Restaurantes da Categoria" 
      keywords="delivery, food"
    >
      <Highlights title={id}/>
    </PageTemplate>
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
