import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import Section from '../components/PageSection'
import { item1, item2, item3, contact } from '../data.constants'
import ProductList from '../components/ProductList'

export function Home() {

  return (
    <>
      <MainHeader />  
      <main>
        <Section item={item1} imgPosition='top'/>
        <Section item={item2} imgPosition='left'/>
        <Section item={item3} imgPosition='right'/>
        <ProductList />
        <Section item={contact} imgPosition='top' imgSize='small'/>
      </main>
      <Footer />  
    </>
  )
}