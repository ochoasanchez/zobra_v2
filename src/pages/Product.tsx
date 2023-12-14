import { useParams } from "react-router-dom";
import {products, cardContent, contact2} from "../data.constants"
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import PageSectionWithCard from "../components/PageSectionWithCard";
import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";
import Divider from "../components/Divider";

export function Product() {
  
    const { slug } = useParams();

    const product = products.find((element) => element.slug === slug);

    console.log(product)


  return (
    <>
        <PageHeader />  
        <main> 
          <Divider />
          <section className="page-section flex flex-col md:flex-row gap-y-4">
            <div className="md:w-6/12">
              <img src={product && product.img} className="w-32 md:w-44 mx-auto"/>
            </div>
            <div className="md:w-6/12">
              <p className='text-yellow-600 uppercase font-bold'>{product && product.year}</p>
              <h1 className="mt-2">{product && product.title}</h1>
              <p className="mt-4 text-justify">{product && product.description}</p>
            </div>
          </section>
          <PageSectionWithCard item={cardContent} imgPosition="left" />
          <ProductList />
          <PageSection item={contact2} imgPosition='top' imgSize='small'/>
        </main>
        <Footer />  
    </>
  )
}