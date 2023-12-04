import '../assets/main.scss';
import './Divider'
import Divider from './Divider';
import {products} from "../data.constants"
import ProductTile from './ProductTile';


const ProductList = () => {
    return (
        <>
            <Divider />
            <section className="flex md:w-4/5 mt-6 py-6 mx-auto justify-between gap-x-8">
                {products.map((product) => {
                    return <ProductTile product={product} />
                })}
            </section>
        </>
    )
}

export default ProductList;