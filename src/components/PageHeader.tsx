import { Link } from "react-router-dom"
import Divider from "./Divider"
import Navbar from "./Navbar"
import ZobraLogo from"../assets/zobra.svg"

const PageHeader = () => {
    return (
        <header className="w-full">
            <Navbar />
              <Link to="/"><img className="mx-auto border-black w-64 mt-8" src={ZobraLogo} /></Link>
            <Divider />
        </header>  
    )
}

export default PageHeader;