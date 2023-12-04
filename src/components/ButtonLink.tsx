import { Link } from "react-router-dom";

type ButtonLinkProps = {
    name: string,
    to: string,
}

const ButtonLink = ({name, to}: ButtonLinkProps) => {
    return (
        <Link className='w-min whitespace-nowrap border-b-2 border-white text-md text-yellow-600 flex mt-2 align-middle transition-all hover:text-yellow-600 hover:border-b-2 hover:border-solid hover:border-yellow-600'to={to}>
            <span>{name}</span><span className="material-symbols-outlined !text-base ml-2">arrow_forward</span>
        </Link>
    )
}

export default ButtonLink;