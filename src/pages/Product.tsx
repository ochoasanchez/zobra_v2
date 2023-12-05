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

    // const products = [{
    //     id: 1,
    //     title: "Rioja Red Blend",
    //     slug: "rioja-red-blend",
    //     description: "As the name suggests, this style is overwhelmingly found in Rioja, and just a handful of notable examples exist in Priorat (west of Barcelona) and Valdepenas (south of Madrid). In Rioja, the wine's foundation, Tempranillo, is grown primarily in the sub-regions of Rioja Alta and Rioja Alavesa. Tempranillo offers a range of flavors from lighter red fruit such as strawberries and cherries, through to richer and riper flavors such as prunes, chocolate and stewed fruit.",
    //     img: "",
    // },{
    //     id: 2,
    //     title: "Tempranillo",
    //     slug: "tempranillo",
    //     description: "",
    //     img: "",
    // },{
    //     id: 3,
    //     title: "Macabeo (Viura)",
    //     slug: "macabeo-viura",
    //     description: "",
    //     img: "",
    // },]


  return (
    <>
        <PageHeader />  
        <main> 
          <div className="flex w-4/5 py-12 mt-4 mx-auto">
            <div className="w-6/12">
              <img src={product && product.img} className="w-44 mx-auto"/>
            </div>
            <div className="w-6/12">
              <p className='text-yellow-600 uppercase font-bold'>{product && product.year}</p>
              <h1 className="mt-4">{product && product.title}</h1>
              <p className="mt-4">{product && product.description}</p>
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