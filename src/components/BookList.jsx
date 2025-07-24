import SingleBook from './SingleBook';
import { Container, Row, Col } from 'react-bootstrap';

const BookList = (props) => {
  return (
    <>
      <Container>
        <Row>
          {props.books.map((libro) => {
            return (
              <Col xs={6} md={4} lg={3} xl={2} key={libro.asin}>
                <SingleBook
                  immagine={libro.img}
                  title={libro.title}
                  price={libro.price}
                  asin={libro.asin}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BookList;
