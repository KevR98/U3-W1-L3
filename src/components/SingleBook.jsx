import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  cardSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Card
        className={`card ${
          this.state.selected ? 'border-danger border-5' : ''
        }`}
        onClick={this.cardSelected}
      >
        <Card.Img variant='top' src={this.props.immagine} />
        <Card.Body>
          <div>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Category: {this.props.category}</Card.Text>
            <Card.Text>Price: {this.props.price}</Card.Text>
          </div>
          <div>
            <Button variant='primary'>ACQUISTA</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
