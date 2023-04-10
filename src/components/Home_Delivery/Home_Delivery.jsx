import "./Home_Delivery.css"
import Groceries from "../../assets/groceriess.svg"
import Restaurant from "../../assets/restaurant.svg"
import Delivery from "../../assets/deliver1.svg"
import { Col, Container, Row } from "react-bootstrap"

const Home_Delivery = () => {
  return (
    <Container fluid>
        <div className="delivery__main__container">
            <Row className="delivery__main__row">
                <Col>
                    <img
                    src={Restaurant}
                    alt="Restaurant"
                    className="restaurant__img"
                    />
                    <div className="delivery__main__body">
                        <h3>
                            Your city's top restaurant
                        </h3>
                        <p>
                            With a great variety of restaurants
                            you can order your favorite food
                        </p>
                    </div>
                </Col>

                <Col>
                    <img
                    src={Delivery}
                    alt="Restaurant"
                    className="restaurant__img"
                    />
                    <div className="delivery__main__body">
                        <h3>
                            Fast Delivery
                        </h3>
                        <p>
                            With a great variety of restaurants
                            you can order your favorite food
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className="delivery__main__row">
                <Col>
                    <img
                    src={Groceries}
                    alt="Restaurant"
                    className="restaurant__img"
                    />
                    <div className="delivery__main__body">
                        <h3>
                            Your city's top restaurant
                        </h3>
                        <p>
                            With a great variety of restaurants
                            you can order your favorite food
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
  )
}
export default Home_Delivery