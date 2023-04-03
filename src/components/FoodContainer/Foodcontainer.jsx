import { Col, Container, Row } from "react-bootstrap"
import "./FoodContainer.css"

const Foodcontainer = () => {
  return (
   <Container fluid>
    <Row>
        <Col>
            <img
            src={require("../../assets/food1.jpg")}
            className="featured__foods"
            />
        </Col>

        <Col>
        <img
            src={require("../../assets/food1.jpg")}
            className="featured__foods"
            />
        </Col>

        <Col>
            <img
            src={require("../../assets/food1.jpg")}
            className="featured__foods"
            />
        </Col>

        <Col>
            <img
            src={require("../../assets/food1.jpg")}
            className="featured__foods"
            />
        </Col>
    </Row>

    <Row>
        <Col>
            <img
            src={require("../../assets/food1.jpg")}
            className="featured__foods"
            />
        </Col>

        <Col>
            <img
            src={require("../../assets/food1.jpg")}
            className="featured__foods"
            />
        </Col>

        <Col>
            <img
            src={require("../../assets/food1.jpg")}
            className="featured__foods"
            />
        </Col>
    </Row>

    
   </Container>
  )
}
export default Foodcontainer