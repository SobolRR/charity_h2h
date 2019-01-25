// import h2hlogo from 'assets/img/logo/h2h_logo.png';
// import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardImgOverlay, CardImg, CardTitle, Button, CardBody } from 'reactstrap';

import bn from 'utils/bemnames';

const bem = bn.create('main_card');

class MainCard extends React.Component {

  render() {
    const {  src  } = this.props;

    return (
    <Card>
        <CardImg width="100%" src={src} alt="Card image cap" />
            <CardImgOverlay  className={bem.e('body')}>
            <CardTitle>Card Title</CardTitle>
              <CardBody>
              <Button>Go somewhere</Button>
              <Button>Go somewhere</Button>
            </CardBody>   
            </CardImgOverlay>  
    </Card>
    );
  }
}

MainCard.propTypes = {
};

MainCard.defaultProps = {
};

export default MainCard;
