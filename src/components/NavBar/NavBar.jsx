import { Link } from 'react-router-dom'
import './NavBar.scss'
function NavBar() {
    return (
        <>
            <section className="nav-bar">
                <Link to="/" className="nav-bar__logo-link">
                    <h1 className="nav-bar__logo"> That's Our Lingo! </h1>
                </Link>
                <div className="nav-bar__link">
                    <Link to="/" className="nav-bar__link--grammar">
                        <h4>Grammar</h4>
                    </Link>

                    <Link to="/" className="nav-bar__link--vocab">
                        <h4>Vocabulary</h4>
                    </Link>
                </div>
            </section>
        </>
    )

}

export default NavBar 