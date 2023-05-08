import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Image Detection</h1>
    <p>This is an applications for API test.</p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
