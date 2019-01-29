// import h2hlogo from 'assets/img/logo/h2h_logo.png';
// import PropTypes from 'prop-types';
import React from 'react';

import { CardTitle, CardLink, CardBody, Row } from 'reactstrap';

class TagLineCardBody extends React.Component {

  render() {
    const { tagLine } = this.props;

    return (
      <CardBody className="d-flex justify-content-center align-items-center flex-column">
        <CardTitle tag='h1' className="mb-4">{tagLine}</CardTitle>
        <Row className='mt-4'> 
          <CardLink tag='a' href='/login' className="btn btn-lg btn-outline-light mr-3">Go somewhere</CardLink>
          <CardLink tag='a' href='/login' className="btn btn-lg btn-outline-light ml-3">Go somewhere</CardLink>
        </Row>
      </CardBody> 
    );
  }
}

TagLineCardBody.propTypes = {
};

TagLineCardBody.defaultProps = {
};

export default TagLineCardBody;
