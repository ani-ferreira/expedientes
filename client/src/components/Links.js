import { Card, Col, Row, Container } from 'react-bootstrap';

import styles from '../../src/components/styles/Links.module.css';

const Links = () => {
  return (
    <>
      <h3 className="banner">Mesa de entradas virtual</h3>
      <Container className="mt-5 mb-5">
        <Row className="gy-5">
          <Col>
            <a
              href="https://www.pjn.gov.ar/gestion-judicial"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.links}
            >
              <Card className={styles.card}>
                <Card.Title>PJN</Card.Title>
              </Card>
            </a>
          </Col>
          <Col>
            <a
              href="https://mev.scba.gov.ar/loguin.asp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.links}
            >
              <Card className={styles.card}>
                <Card.Title>MEV</Card.Title>
              </Card>
            </a>
          </Col>
          <Col>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.anses.gob.ar/"
              className={styles.links}
            >
              <Card className={styles.card}>
                <Card.Title>ANSES</Card.Title>
              </Card>{' '}
            </a>
          </Col>
          <Col>
            {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://notificaciones.scba.gov.ar/"
              className={styles.links}
            >
              <Card className={styles.card}>
                <Card.Title>NOTIFICACIONES</Card.Title>
              </Card>{' '}
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Links;
