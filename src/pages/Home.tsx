import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import { item1, item2, item3 } from '../data.constants'
import ProductList from '../components/ProductList'

export function Home() {

  return (
    <>
      <Header />  
      <main>
        <Section item={item1} imgPosition='top'/>
        <Section item={item2} imgPosition='left'/>
        <Section item={item3} imgPosition='right'/>
        <ProductList />
      </main>
      <Footer />  
    </>
  )
}