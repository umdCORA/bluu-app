import React from 'react';
import { Container, Row } from 'reactstrap';
import './NavigationColumn.scss';

class NavigationColumn extends React.Component {
  render() {
    return (
      <Container className="NavigationColumn" fluid>
        <Row className="name-row">
          Michael Li
        </Row>
        <Row>
          Make a Report
        </Row>
      </Container>
    );
  }
}

export default NavigationColumn;
