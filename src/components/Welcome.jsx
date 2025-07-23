import { Container, Row, Alert } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Row xs={12} className='text-center my-2'>
      <Alert variant='success'>Benvenuto nella libreria EPIBOOK!</Alert>
      <h1>Questa è una la libreria di EpiBook con i nostri BEST SELLERS!</h1>
    </Row>
  );
};

export default Welcome;
