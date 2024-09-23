import { Link } from 'react-router-dom'
import './Footer.scss'
function Footer() {
    return (
        <>
            <section className="footer">
                <Link className="footer__link" to="https://github.com/jenaniu/jenani-uthayavarnan-thats-our-lingo" className="footer__link">
                    <p>GitHub</p>
                </Link>
                <p className="footer__text">Designed by Jenani</p>
                <Link className="footer__link" to="https://github.com/jenaniu/jenani-uthayavarnan-thats-our-lingo-api" className="footer__link">
                    <p>API</p>
                </Link>
            </section>
        </>
    )

}

export default Footer 