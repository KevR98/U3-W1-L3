import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FantasyBooks from '../data/books/fantasy.json';
import HistoryBooks from '../data/books/history.json';
import HorrorBooks from '../data/books/horror.json';
import RomanceBooks from '../data/books/romance.json';
import ScifiBooks from '../data/books/scifi.json';

const AllBooks = [
  ...FantasyBooks,
  ...HistoryBooks,
  ...HorrorBooks,
  ...RomanceBooks,
  ...ScifiBooks,
];

const AllTheBooks = () => {
  return (
    <>
      <Container className='my-2'>
        <Row>
          {AllBooks.map((book) => {
            return (
              <Col xs={12} md={6} lg={4} xl={3} className='g-2' key={book.asin}>
                <Card className='card'>
                  <Card.Img variant='top' src={book.img} />
                  <Card.Body className='card-body'>
                    <div className='content'>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>Category: {book.category}</Card.Text>
                      <Card.Text>Price: {book.price}</Card.Text>
                    </div>
                    <div>
                      <Button variant='primary'>ACQUISTA</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
