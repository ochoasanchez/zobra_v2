import { Link } from "react-router-dom"
import ButtonLink from "./ButtonLink";

type ProductTileProps = {
    product: Product,
}

const ProductTile = ({ product }: ProductTileProps) => {
    return (
        <div className='w-full md:w-4/12' key={`zb-${product.id}`}>
            <div className='transition-all hover:scale-105'>
                <Link to={`/product/${product.slug}`}>
                    <img className='w-32 mx-auto' src={product.img} />
                </Link>
            </div>
            <div className='mt-4 flex flex-col items-center md:items-start'>
                <small className="font-bold text-yellow-600">{product.year}</small>
                <h2 className='mt-2'>{product.title}</h2>
                <ButtonLink name="Learn more" to={`/product/${product.slug}`} />
            </div>
        </div>
    )
}

export default ProductTile;