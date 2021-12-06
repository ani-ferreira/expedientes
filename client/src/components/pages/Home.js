import { Link } from "react-router-dom";
import styles from "../../components/styles/Home.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  BsFillCloudArrowUpFill,
  BsFillArchiveFill,
  BsCardList,
} from "react-icons/bs";
import Links from "../Links";

const Home = () => {
  return (
    <>
      <h3 className=" banner">Control de expedientes</h3>
      <Container className={styles.container}>
        <Row className="gy-5">
          <Col>
            <Card className={styles.card}>
              <div>
                <BsFillCloudArrowUpFill className={styles.icon} />
              </div>
              <Card.Body className={styles.text}>
                <Card.Title>
                  <Link to="/add" className={styles.link}>
                    Agregar movimiento
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <div>
                <BsCardList className={styles.icon} />
              </div>
              <Card.Body className={styles.text}>
                <Card.Title>
                  <Link to="/posts" className={styles.link}>
                    Ver todos los movimientos
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <div>
                <BsFillArchiveFill className={styles.icon} />
              </div>
              <Card.Body className={styles.text}>
                <Card.Title>
                  <Link to="/folders" className={styles.link}>
                    Carpetas
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Links />
    </>
  );
};

export default Home;
