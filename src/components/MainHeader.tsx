import '../assets/main.scss';
import Navbar from './Navbar';
import ZobraLogo from "../assets/zobra.svg";
import BottlesImg from "../assets/bottles.jpg";

const MainHeader = () => {
    return (
        <header className='h-screen'>
            <Navbar />
            <div className="flex items-center h-full justify-center page-section -mt-12 mx-auto lg:-mt-2 flex-col md:flex-row">
                <div className='w-full md:w-6/12'>
                    <img className="w-64 md:w-96 mx-auto" src={ZobraLogo} />
                    <p className='text-center text-yellow-600 uppercase font-bold mt-6'>Introducing Zobra Vineyards</p>
                    <h1 className='mt-4 text-3xl md:text-4xl 3xl:text-5xl text-center'>Uncork the essence of life</h1>
                </div>
                <div className='w-full md:w-6/12 hidden md:block'>
                    <img className="w-96 mx-auto self-center flex-1" src={BottlesImg} />
                </div>
            </div>
        </header>
    )
}

export default MainHeader;