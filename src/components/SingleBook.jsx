import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SingleBook = (props) => {
  return (
    <Container className='my-2'>
      <Row>
        <Col xs={12} md={6} lg={4} xl={3} className='g-2'>
          <Card className='card'>
            <Card.Img variant='top' src={props.copertina} />
            <Card.Body className='card-body'>
              <div className='content'>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>Category: {props.category}</Card.Text>
                <Card.Text>Price: {props.price}</Card.Text>
              </div>
              <div>
                <Button variant='primary'>ACQUISTA</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
