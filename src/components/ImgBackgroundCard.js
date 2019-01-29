import React from 'react';
import { Card } from 'reactstrap';

const ImgBackgroundCard = ({ tagLine, backgroundImg, width, height, children, ...restProps }) => {
    debugger;
    return <Card inverse style= {{ backgroundImage: `url(${backgroundImg})`, width, height }} {...restProps}>{children}</Card>;
}

ImgBackgroundCard.defaultProps = {
    width: '100%',
    height: 400
};

export default ImgBackgroundCard;