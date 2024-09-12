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
        <span className="homepage__header">That's Our Lingo!</span>
        <Button buttonClassName="homepage__button" buttonText="Get Started!" buttonTextClassName="homepage__button" onClick={handleClick} />
      </section>
    </>
  )
}

export default HomePage
