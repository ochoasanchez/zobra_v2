import '../assets/main.scss';
import './Divider'
import Divider from './Divider';
import {products} from "../data.constants"
import ProductTile from './ProductTile';


const ProductList = () => {
    return (
        <>
            <Divider />
            <section className="page-section flex flex-col md:flex-row justify-between gap-8">
                {products.map((product) => {
                    return <ProductTile product={product} key={`zb-${product.id}`} />
                })}
            </section>
        </>
    )
}

export default ProductList;