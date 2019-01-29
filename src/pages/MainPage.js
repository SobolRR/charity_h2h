import React from 'react';

import { Link } from 'react-router-dom';

import { Row, Alert, Col } from 'reactstrap';

import Page from 'components/Page';
import TagLineCardBody from 'components/TagLineCardBody';
import ImgBackgroundCard from 'components/ImgBackgroundCard';
import InstitutionCardBodyItem from 'components/InstitutionCardBodyItem';

import kidsImg from 'assets/img/kids_1600x400.jpg';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: true,
      instArr: [ 
        {id: 1, name: 'Областной центр Чебурашка', imgPath: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/148908510.jpg'},
        {id: 2, name: 'Районный центр Звездочка', imgPath: 'https://www.linkage.org.uk/upload/2017/01/Abbey-House-1024x710-500x500.jpg'},
        {id: 3, name: 'Районный приют для несовершеннолетних', imgPath: 'https://extraordinary.co.za/wp-content/uploads/2018/01/mont-dor-pretoria-3-500x500.jpg'},
        {id: 4, name: 'Харьквское детское отделение №1', imgPath: 'https://i.szalas.hu/hotels/1196961/500x500/27255025.jpg'},
        {id: 5, name: 'Купянская школа интернат №1',  imgPath: 'https://t4.ftcdn.net/jpg/02/38/39/27/500_F_238392754_NQXAbLBJK2bpyhDAOOOEv3bwH1mWAImO.jpg'},
        {id: 6, name: 'Великобурлуцкий центр социально-психологической реабилитации',  imgPath: 'https://www.brookesandco.net/wp-content/uploads/2016/06/sinai-park-house-500x500.jpg'} ]
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {}

  onDismiss() {
    this.setState({ alertVisible: false });
  }
  // xx () {
  //   import('assets/img/img2.jpg').then(data => {
  //     debugger;
  //     return data;
  //   })
  // }

  render() {
    // this.xx();
  const { alertVisible, instArr } = this.state;
    return (
      <Page
        className="MainPage"
        title="Главная">  
        <ImgBackgroundCard backgroundImg={kidsImg}>
          <TagLineCardBody tagLine={'Вместе мы сможем все!'}/>
        </ImgBackgroundCard>

        <Alert color="info" className='text-center mt-4' isOpen={alertVisible} toggle={this.onDismiss}>
          <Link to='/login'><h1>Чем я могу помочь?</h1></Link> 
        </Alert>

      <section>
        <Row>
          {instArr.map((item, index) => (
            <Col lg={4} md={6} sm={6} xs={12} key={index} className="mb-3">
              <ImgBackgroundCard backgroundImg={item.imgPath}>
              <InstitutionCardBodyItem name={item.name}/>
              </ImgBackgroundCard>
            </Col>
          ))}
        </Row> 
      </section>
      </Page>
    );
  }
}
export default MainPage;
