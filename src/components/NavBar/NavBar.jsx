import { Link, useNavigate } from 'react-router-dom'
import './NavBar.scss'
import navBarLogo from '../../assets/images/Thats-Our-Lingo-Logo-Small.png'
import backButton from '../../assets/images/back-arrow.png'



function NavBar() {

    const navigate =  useNavigate();

    const onClick = () => {
        navigate(-1);
    }

    return (
        <>
            <section className="nav-bar">
                <Link to="/" className="nav-bar__link">
                    <img className="nav-bar__logo" src={navBarLogo}></img>
                </Link>

                <Link to="/languages" className="nav-bar__link">
                    <h5 className="nav-bar__text">Languages</h5>
                </Link>
            </section>
            {/* <img className="nav__back" src={backButton} onClick={onClick}></img> */}

        </>
    )

}

export default NavBar 