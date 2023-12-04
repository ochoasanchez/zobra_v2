import '../assets/main.scss';
import './Divider'
import Divider from './Divider';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className="flex items-center w-full h-screen py-4 -mt-8">
                <div className='flex-1 -mt-8'>
                    <img className="w-96 mx-auto border-black" src="./src/assets/zobra.svg" />
                    {/* <h1 className='my-4 text-6xl mx-auto w-max'><span className='text-red-700'>Uncork</span><br /> the essence of life</h1> */}
                    <p className='text-center text-yellow-600 uppercase font-bold'>Introducing Zobra Vineyards</p>
                    <h1 className='mt-4 text-5xl text-center'>Uncork the essence of life</h1>
                </div>
                <div className='flex-1'>
                    <img className="w-96 mx-auto border-black self-center flex-1" src="./src/assets/bottles.jpg" />
                </div>
            </div>
            {/* <Divider /> */}
        </header>
    )
}

export default Header;