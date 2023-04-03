import Foodcontainer from "../../components/FoodContainer/Foodcontainer"
import Banner from "./Banner/Banner"
import Hero from "./Hero/Hero"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
        title="Adzibanaa Dzidziiii...."
        subtitle="Great and quality taste"
        body="You satisfaction is our concern"
        />
      </Hero>

      <div className="featured__foods">
        <h3>
          Featured Food
        </h3>
      </div>

      <div className="home__foodcontainer">
        <Foodcontainer  />
      </div>
    </div>
  )
}
export default Home