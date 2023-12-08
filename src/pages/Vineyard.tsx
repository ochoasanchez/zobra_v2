import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";
import ProductList from "../components/ProductList";
import { item2, contact } from '../data.constants'

export function Vineyard() {
    return (
        <>
            <PageHeader />
            <main>
                <PageSection item={item2} imgPosition='right' showDivider={false} title="Vineyard" />
                <ProductList />
                <PageSection item={contact} imgPosition='top' imgSize='small'/>
                <Footer />
            </main>
        </>
    )
}

export default Vineyard;