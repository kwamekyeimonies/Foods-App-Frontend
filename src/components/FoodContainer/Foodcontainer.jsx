import { Col, Container, Row } from "react-bootstrap"
import "./FoodContainer.css"

const Foodcontainer = () => {
  return (
   <Container fluid>
    <Row className="food__container__row">
        <Col className="food__col">
            <img
            src={require("../../assets/food1.jpg")}
            className="featured_food"
            />
           <div className="featured__food__name">
            <p>Monies Pizza</p>
           </div>
        </Col>

        <Col className="food__col">
        <img
            src={require("../../assets/food4.jpg")}
            className="featured_food"
            />
             <div className="featured__food__name">
            <p>Monies Pizza</p>
           </div>
        </Col>

        <Col className="food__col">
            <img
            src={require("../../assets/food2.jpg")}
            className="featured_food"
            />
             <div className="featured__food__name">
            <p>Monies Pizza</p>
           </div>
        </Col>

        <Col className="food__col">
            <img
            src={require("../../assets/food1.jpg")}
            className="featured_food"
            />
             <div className="featured__food__name">
            <p>Monies Pizza</p>
           </div>
        </Col>
    </Row>

    <Row  className="food__container__row">
        <Col className="food__col">
            <img
            src={require("../../assets/food3.jpg")}
            className="featured_food"
            />
             <div className="featured__food__name">
            <p>Monies Pizza</p>
           </div>
        </Col>

        <Col className="food__col">
            <img
            src={require("../../assets/food2.jpg")}
            className="featured_food"
            />
             <div className="featured__food__name">
            <p>Monies Pizza</p>
           </div>
        </Col>

        <Col className="food__col">
            <img
            src={require("../../assets/food1.jpg")}
            className="featured_food"
            />
             <div className="featured__food__name">
            <p>Monies Pizza</p>
           </div>
        </Col>

        <Col className="food__col">
            <img
            src={require("../../assets/food4.jpg")}
            className="featured_food"
            />
             <div className="featured__food__name">
            <p>Monies Pizza</p>
           </div>
        </Col>
    </Row>

    
   </Container>
  )
}
export default Foodcontainer