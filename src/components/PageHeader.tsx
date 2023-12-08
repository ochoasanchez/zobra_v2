import { Link } from "react-router-dom"
import Divider from "./Divider"
import Navbar from "./Navbar"

const PageHeader = () => {
    return (
        <header className="w-full">
            <Navbar />
              <Link to="/"><img className="mx-auto border-black w-64 mt-8" src="../src/assets/zobra.svg" /></Link>
            <Divider />
        </header>  
    )
}

export default PageHeader;