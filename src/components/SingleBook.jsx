import { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class SingleBook extends Component {
  render() {
    return (
      <Container className='my-2'>
        <Row>
          <Col xs={12} md={6} lg={4} xl={3} className='g-2'>
            <Card className='card'>
              <Card.Img variant='top' src={this.props.copertina} />
              <Card.Body className='card-body'>
                <div className='content'>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>Category: {this.props.category}</Card.Text>
                  <Card.Text>Price: {this.props.price}</Card.Text>
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
  }
}

export default SingleBook;
