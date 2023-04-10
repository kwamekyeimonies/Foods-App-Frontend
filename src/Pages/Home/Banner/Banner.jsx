import { Container } from "react-bootstrap"
import "./Banner.css"

const Banner = ({children,title,subtitle,body,videoSrc}) => {
  return (
   <Container fluid>
     <div className="banner">

    <div className="video_container">
        <video src={videoSrc}autoPlay loop muted   />
    </div>
    <div className="banner__body">
    <h1>
        {title}
    </h1>
    <div></div>
    <h4>
        {subtitle}
    </h4>
    <p>
        {body}
    </p>
    {
        children
    }
    </div>
    </div>
   </Container>
  )
}
export default Banner