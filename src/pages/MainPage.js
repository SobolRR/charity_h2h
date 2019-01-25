import React from 'react';

// import { getColor } from 'utils/colors';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardGroup,
  CardDeck,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
} from 'reactstrap';

import Page from 'components/Page';

class MainPage extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <Page
        className="MainPage"
        title="Главная">
        <Row>
          <Col lg={4} md={6} sm={6} xs={10}>
           
          </Col>

          <Col lg={4} md={6} sm={8} xs={10}>
           
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
           
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
          
          </Col>
        </Row>

        <CardGroup style={{ marginBottom: '1rem' }}>
       
        </CardGroup>

        

        

        <CardDeck style={{ marginBottom: '1rem' }}>
          <Card body style={{ overflowX: 'auto' }}>
           
          </Card>

          <Card body style={{ overflowX: 'auto' }}>
            
          </Card>
        </CardDeck>
      </Page>
    );
  }
}
export default MainPage;
