import { useParams } from "react-router-dom";
import {products, cardContent/*, contact*/} from "../data.constants"
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
// import PageSection from "../components/PageSection";
import PageSectionWithCard from "../components/PageSectionWithCard";
import PageHeader from "../components/PageHeader";

export function Product() {
  
    const { slug } = useParams();

    const product = products.find((element) => element.slug === slug);

    console.log(product)


  return (
    <>
        <PageHeader />  
        <main> 
          <div className="page-section flex">
            <div className="w-6/12">
              <img src={product && product.img} className="w-44 mx-auto"/>
            </div>
            <div className="w-6/12">
              <p className='text-yellow-600 uppercase font-bold'>{product && product.year}</p>
              <h1 className="mt-4">{product && product.title}</h1>
              <p className="mt-4 text-justify">{product && product.description}</p>
            </div>
          </div>
          <PageSectionWithCard item={cardContent} imgPosition="left" />
          <ProductList />
          {/* <PageSection item={contact} imgPosition='top' imgSize='small'/> */}
        </main>
        <Footer />  
    </>
  )
}