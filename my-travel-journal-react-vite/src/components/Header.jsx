import { FaGlobeAmericas } from "react-icons/fa";

export default function Header(){
    return (
        <header>
            <FaGlobeAmericas size={24} color="white" className='globe-icon'/>
            <h1 className="header-text">My Travel Journal</h1>
        </header>        
    )
}