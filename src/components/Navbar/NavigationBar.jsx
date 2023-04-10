import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine} from "react-icons/ri"
import "./NavigationBar.css"
import { Container } from 'react-bootstrap';

const Menu =()=>(
  <>
  <p>
    <Link to="/">
      Home
    </Link>
  </p>

  <p>
    <Link to="/">
      About
    </Link>
  </p>

  <p>
    <Link to="/">
      Help
    </Link>
  </p>
  </>
)


const NavigationBar = () => {

  const [toggleMenu,setToggleMenu] = useState(false)

  console.log(toggleMenu)

  return (
   <Container fluid>
    <div className='navigation_parent_section'>
      <div className='navigation_left_section'>
        <h3>Adziban Dzidzi</h3>
      </div>
      <div className='navigation_right_section'>
        <p>
          <Link to="/getstarted">
            Get Started
          </Link>
        </p>
      </div>
    </div>
   </Container>
  )
}
export default NavigationBar