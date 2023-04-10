import { Container, Row } from "react-bootstrap";
import FoodBanner from "../../assets/food2.jpg"

const Food_Banner = () => {
  return (
    <Container fluid>
        <Row>

        <div className="food__banner__left">
            <div className="food__left">
                <div className="header">
                    <h3>
                        Adziban Dzidzi
                    </h3>
                </div>
                <div className="body">
                    <p>
                        Where u find your great taste
                    </p>
                </div>
            </div>
        </div>

        <div className="food__banner__right">
            <div className="food__banner__image">
                <img
                src={FoodBanner}
                alt=""
                className="banner__image"
                />
            </div>
        </div>
        </Row>
    </Container>
  )
}
export default Food_Banner