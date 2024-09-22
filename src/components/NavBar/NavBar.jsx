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
                    <h5>Languages</h5>
                </Link>

                {/* <div className="nav-bar__link">
                    

                    <Link to="/" className="nav-bar__link--vocab">
                        <h4>Vocabulary</h4>
                    </Link>
                </div> */}
            </section>
        </>
    )

}

export default NavBar 