import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine} from "react-icons/ri"
import "./NavigationBar.css"

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
   <div className='navigation__container'>
    <div className='navigation__left'>
      <div className='navigation__logo'>
        <h1 className='navigation__header'>
          <Link to="/">
            Adziban Dzidzi
          </Link>
        </h1>
      </div>
      <div className='navigation__links'>
        <Menu />
      </div>
    </div>

    
      <div className='navigation__buttons'>
        <p className='navigation__login__link'>
          <Link to="/login">
            Sign In
          </Link>
        </p>
        <button type='button'>
          <Link to="/signup">
            Sign Up
          </Link>
        </button>
      </div>
    

    <div className='navigation__sub_menu'>
    {
      toggleMenu
      ? <RiCloseLine size={27} onClick={()=> setToggleMenu(false)}  />
      : <RiMenu3Line size={27} onClick={()=> setToggleMenu(true)} />
      
    }
    {toggleMenu && (

    <div className='navigation__bar__sub_container scale__up__center'>   

    <div className='sub_navigation__links'>
      <Menu />
    </div>
        
   
    <div className='sub_navigation__buttons'>
      <p>
        <Link to="/login">
          Sign In
        </Link>
      </p>
      <button type='button'>
        <Link to="/signup">
          Sign Up
        </Link>
      </button>
    </div>
    
        
    </div>

    )
      
    }
    </div>

  
   </div>
  )
}
export default NavigationBar