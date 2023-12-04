import NavbarLink from './NavbarLink';

const Header = () => {
    return (
        
        <nav className="w-full">
            <ul className='flex justify-center mt-8'>
                <NavbarLink name="Home" to="/" />
                <NavbarLink name="About us" to="#" />
                <NavbarLink name="Vineyard" to="#" />
                <NavbarLink name="Contact" to="#" />
            </ul>
        </nav>
    )
}

export default Header;