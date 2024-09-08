import {Link} from "react-router-dom";
import {IoBookmarks} from "react-icons/io5";

const Header = () => {
    return (
        <div className='flex  justify-between items-center mb-3'>
            <Link to="/" >
                <img className="w-[150px]" src="../../../public/assets/images/netflixLogo.png" alt="netflix-logo"/>
            </Link>

            <Link className='py-1 px-5 border hover:text-gray-500 transition hover:border-blue-600 border-blue-500 rounded flex items-center gap-1.5' to="/favorites"> <IoBookmarks className='text-xl'/>  Izleme Listesi</Link>
        </div>
    );
};

export default Header;
