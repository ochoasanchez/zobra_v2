import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import PageSection from '../components/PageSection'
import { item1, item2, item3, contact } from '../data.constants'
import ProductList from '../components/ProductList'

export function Home() {

  return (
    <>
      <MainHeader />   
      <main>
        <PageSection item={item1} />
        <PageSection item={item2} imgPosition='left'/>
        <PageSection item={item3} imgPosition='right'/>
        <ProductList />
        <PageSection item={contact} imgPosition='top' imgSize='small'/>
      </main>
      <Footer />  
    </>
  )
}