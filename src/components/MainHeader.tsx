import '../assets/main.scss';
import './Divider'
import Navbar from './Navbar';

const MainHeader = () => {
    return (
        <header>
            <Navbar />
            <div className="flex items-center w-full 3xl:w-4/5 h-screen -mt-8 mx-auto">
                <div className='flex-1 -mt-8'>
                    <img className="w-96 mx-auto" src="./src/assets/zobra.svg" />
                    <p className='text-center text-yellow-600 uppercase font-bold mt-6'>Introducing Zobra Vineyards</p>
                    <h1 className='mt-4 text-5xl text-center'>Uncork the essence of life</h1>
                </div>
                <div className='flex-1'>
                    <img className="w-96 mx-auto self-center flex-1" src="./src/assets/bottles.jpg" />
                </div>
            </div>
        </header>
    )
}

export default MainHeader;