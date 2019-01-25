import React from 'react';

import {
  Card,
  CardGroup,
  CardDeck,
  Row,
  Col
} from 'reactstrap';

import Page from 'components/Page';
import MainCard from 'components/MainCard';

import kidsImg from 'assets/img/kids_1600x300.jpg';

class MainPage extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <Page
        className="MainPage"
        title="Главная">
        <Row>

          <MainCard src={kidsImg} />
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
