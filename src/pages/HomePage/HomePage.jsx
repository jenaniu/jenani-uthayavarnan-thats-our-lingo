import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './HomePage.scss'


function HomePage() {

  return (
    <>
      {/* <HelmetProvider> */}
        {/* <Helmet>
          <title>That's Our Lingo</title>
        </Helmet> */}
      {/* </HelmetProvider> */}
      <section className="homepage" >
        <h1 className="homepage__header">That's Our Lingo!</h1>
        <Button buttonClassName="cheese" buttonText="Get Started!" />
      </section>
    </>
  )
}

export default HomePage
