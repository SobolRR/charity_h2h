import React from 'react';
import PropTypes from 'utils/propTypes';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Typography from './Topography';

const Page = ({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  
  return (
    <Tag className={className} {...restProps}>
      <div>
        {title && typeof title === 'string' ? (
          <Typography type="h1">
            {title}
          </Typography>
        ) : (
            title
          )}
        {breadcrumbs && (
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            {breadcrumbs.length &&
              breadcrumbs.map(({ name, active }, index) => (
                <BreadcrumbItem key={index} active={active}>
                  {name}
                </BreadcrumbItem>
              ))}
          </Breadcrumb>
        )}
      </div>
      {children}
    </Tag>
  );
};

Page.propTypes = {
  tag: PropTypes.component,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
};

Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default Page;
