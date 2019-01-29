import { Content } from 'components/Layout';
import React from 'react';

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="ch-app bg-light" {...restProps}>
    <Content fluid onClick={() =>{}}>
      {children}
    </Content>
  </main>
);

export default EmptyLayout;
