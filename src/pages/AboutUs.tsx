import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";
import ProductList from "../components/ProductList";
import { item3, contact } from '../data.constants'

export function AboutUs() {
    return (
        <>
            <PageHeader />
            <main>
                <PageSection item={item3} imgPosition='right' showDivider={false} title="About us" />
                <ProductList />
                <PageSection item={contact} imgPosition='top' imgSize='small'/>
                <Footer />
            </main>
        </>
    )
}

export default AboutUs;