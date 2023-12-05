import NavbarLink from './NavbarLink';

const Header = () => {
    return (
        
        <nav className="w-full">
            <ul className='flex justify-center mt-8'>
                <NavbarLink name="Home" to="/" />
                <NavbarLink name="About us" to="/about-us" />
                <NavbarLink name="Vineyard" to="/vineyard" />
                <NavbarLink name="Contact" to="/contact" />
            </ul>
        </nav>
    )
}

export default Header;