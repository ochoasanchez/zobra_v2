import { Link } from "react-router-dom";

type NavbarLinkProps = {
    name: string,
    to: string,
}

const NavbarLink = ({name, to}: NavbarLinkProps) => {
    return (
        <li className='nav-button group'><Link to={to} className="group-hover:text-white">{name}</Link></li>
    )
}

export default NavbarLink;