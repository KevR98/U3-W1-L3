import { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  cardSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Container className='my-2'>
        <Row>
          <Col xs={12} md={6} lg={4} xl={3} className='g-2'>
            <Card
              className={`card ${
                this.state.selected ? 'border-danger border-5' : ''
              }`}
              onClick={this.cardSelected}
            >
              <Card.Img variant='top' src={this.props.immagine} />
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
