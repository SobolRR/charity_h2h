import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { CardTitle, CardBody, Button } from 'reactstrap';

class InstitutionCardBodyItem extends React.Component {
    render () {
        const { name } = this.props;
        return (
            <React.Fragment> 
                <CardBody className="d-flex flex-column justify-content-start align-items-start">
                    <div className="align-self-end justify-content-space-between mb-4">
                        <FontAwesomeIcon icon={faCoffee} color="red" className="ml-3"/>
                        <FontAwesomeIcon icon={faCoffee} color="red" className="ml-3"/>
                    </div>
                    <CardTitle tag="h3" className="text-danger">{name}</CardTitle>
                </CardBody>

                <CardBody className="d-flex justify-content-end align-items-end">
                    <Button outline color="light">
                        Помочь
                    </Button>
                </CardBody>
          </React.Fragment>
        )
    }

}

export default InstitutionCardBodyItem;