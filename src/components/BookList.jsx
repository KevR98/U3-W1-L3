import SingleBook from './SingleBook';
import { Container, Row, Col } from 'react-bootstrap';

const BookList = (props) => {
  return (
    <>
      <Container>
        <Row>
          {props.books.map((libro) => {
            return (
              <SingleBook
                immagine={libro.img}
                title={libro.title}
                price={libro.price}
                asin={libro.asin}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BookList;
