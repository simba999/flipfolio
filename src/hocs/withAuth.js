import React from 'react';
import Login from '../containers/Login';
import store from '../configurationStore';

const withAuth = WrapperComponent => (
  class extends React.Component {
    checkAuth() {
      const { token } = store.getState().currentUser;
      if (!token) {
        this.props.navigator.pushPage(
          { component: Login },
          { animation: 'split' },
        );
      }
    }
    componentWillMount() {
      this.checkAuth();
    }

    componentWillUpdate() {
      this.checkAuth();
    }

    render() {
      return (
        <WrapperComponent {...this.props} />
      )
    }
  }
);

export default withAuth;
