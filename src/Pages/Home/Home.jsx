import { Container } from "react-bootstrap"
import Foodcontainer from "../../components/FoodContainer/Foodcontainer"
import Banner from "./Banner/Banner"
import Hero from "./Hero/Hero"
import "./Home.css"
import Food_Banner from "../../components/Food_Banner/Food_Banner"
import AdVideo from "../../assets/animation.webm"
import Home_Delivery from "../../components/Home_Delivery/Home_Delivery"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <Container fluid>
      <div>
      <Hero>
        <Banner
        title="Adzibanaa Dzidziiii...."
        subtitle="Great and quality taste"
        body="You satisfaction is our concern"
        videoSrc={AdVideo}
        />
      </Hero>


      <div className="featured__food">
        <h3>
          Featured Restaurants 
        </h3>
      </div>

      <div className="home__foodcontainer">
        <Foodcontainer  />
      </div>

      <div className="devlivered__container">
        <div className="devlivered__header">
          <h3>
            Anything Delivered
          </h3>
        </div>

        <div className="delivery__body">
          <Home_Delivery  />
        </div>

        <div className="delivery__button">
          <p>
            <Link to="/">
              Explore stores around you
            </Link>
          </p>
        </div>
      </div>
    </div>
    </Container>
  )
}
export default Home