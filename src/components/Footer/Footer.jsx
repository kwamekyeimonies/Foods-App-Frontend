import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <Container fluid className="footer__parent__container">
      {/* <Row className="footer__row">
        <Col className="section__container">
        <div className="footer__main__header">
          <h3>
            Adziban Dzidzi
          </h3>
        </div>
        </Col>
      </Row> */}
      <Row className="footer__row">
        <Col>
        <div className="section__container">
          <div className="section__header">
            <h3>
              Let's do it together
            </h3>
            <p>
              <Link>Couriers</Link>
              <Link>Careers</Link>
              <Link>Partners</Link>
            </p>
          </div>
        </div>
        </Col>

        <Col>
        <div className="section__container">
          <div className="section__header">
            <h3>
              Link of Interest
            </h3>
            <p>
              <Link>About us</Link>
              <Link>FAQ</Link>
              <Link>Blog</Link>
              <Link>Contact us</Link>
              <Link>Blog</Link>
            </p>
          </div>
        </div>
        </Col>

        <Col>
        <div className="section__container">
          <div className="section__header">
            <h3>
              Follow Us
            </h3>
            <p>
              <Link>Facebook</Link>
              <Link>Twitter</Link>
              <Link>Instagram</Link>
            </p>
          </div>
        </div>
        </Col>        
      </Row>
    </Container>
  )
}
export default Footer