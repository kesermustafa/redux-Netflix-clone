import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='flex items-center mb-3'>
            <Link to="/" >
                <img className="w-[150px]" src="../../../public/assets/images/netflixLogo.png" alt="netflix-logo"/>
            </Link>

        </div>
    );
};

export default Header;
