import '../assets/main.scss';
import InstagramLogo from '../assets/instagram.svg';
import FacebookLogo from '../assets/facebook.svg';
import TripadvisorLogo from '../assets/tripadvisor.svg';
import FooterBackground from '../assets/mountain_shape-inverted.svg';

const Footer = () => {
    return (
        <footer className="mt-8 h-72 flex flex-col justify-between items-center">
            <img className="w-full select-none" src={FooterBackground} alt="Mountain Shape" />
            <div className="flex justify-center gap-x-8">
                <img className='footer-icon' src={InstagramLogo} />
                <img className='footer-icon' src={FacebookLogo} />
                <img className='footer-icon' src={TripadvisorLogo} />
            </div>
            <h4 className='text-white my-4'>© 2023 · Zobra Vineyards</h4>
        </footer>
    )
}

export default Footer;