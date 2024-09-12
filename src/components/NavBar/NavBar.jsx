import { Link } from 'react-router-dom'
import './NavBar.scss'
function NavBar() {
    return (
        <>
            <section className="nav-bar">
                <Link to="/" className="nav-bar__logo-link">
                    <span className="nav-bar__logo"> That's Our Lingo! </span>
                </Link>
                <div className="nav-bar__link">
                    <Link to="/" className="nav-bar__link--grammar">
                        <h2>Grammar</h2>
                    </Link>

                    <Link to="/" className="nav-bar__link--vocab">
                        <h2>Vocabulary</h2>
                    </Link>
                </div>
            </section>
        </>
    )

}

export default NavBar 