import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>Footer
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; ninjahouse.creations
          </Col>
        </Row>
      </Container>
    </footer>
      
  )
}

export default Footer