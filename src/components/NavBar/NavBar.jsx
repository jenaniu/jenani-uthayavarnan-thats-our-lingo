import './NavBar.scss'
function NavBar() {
    return (
        <>
            <section className="nav-bar">
                <span className="nav-bar__logo"> That's Our Lingo! </span>
                <div className="nav-bar__link">
                    <p className="nav-bar__link--grammar">Grammar</p>
                    <p className="nav-bar__link--vocab">Vocabulary</p>
                </div>
            </section>
        </>
    )

}

export default NavBar 