import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './HomePage.scss'
import { useNavigate } from 'react-router-dom'


function HomePage() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate ('/languages')
  }

  return (
    <>
      {/* <HelmetProvider> */}
        {/* <Helmet>
          <title>That's Our Lingo</title>
        </Helmet> */}
      {/* </HelmetProvider> */}



      <section className="homepage" >
        <h1 className="homepage__header">WELCOME TO</h1>
        <img className="homepage__logo" src='src/assets/images/Thats-Our-Lingo-Logo.png'></img>
        <Button buttonClassName="homepage__button" buttonText="Get Started!" buttonTextClassName="homepage__button" onClick={handleClick} />
      </section>
    </>
  )
}

export default HomePage
