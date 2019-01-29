import { Content, Footer, Header } from 'components/Layout';
import React from 'react';

// import NotificationSystem from 'react-notification-system';
// import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';

class MainLayout extends React.Component {

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);
  }

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    console.log(openOrClose);
  }

  render() {
    const { children } = this.props;
    return (
      <main className="ch-app bg-light">
        <Content fluid onClick={this.handleContentClick} className='col-md-10'>
          <Header />
          {children}
          <Footer />
        </Content>

        {/* <NotificationSystem
          dismissible={false}
          ref={notificationSystem =>
            (this.notificationSystem = notificationSystem)
          }
          style={NOTIFICATION_SYSTEM_STYLE}
        /> */}
      </main>
    );
  }
}

export default MainLayout;
