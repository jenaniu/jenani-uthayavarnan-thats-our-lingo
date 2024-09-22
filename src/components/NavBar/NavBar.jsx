import { Link } from 'react-router-dom'
import navBarLogo from '../../assets/images/Thats-Our-Lingo-Logo-Small.png'
import './NavBar.scss'
function NavBar() {
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
        </>
    )

}

export default NavBar 