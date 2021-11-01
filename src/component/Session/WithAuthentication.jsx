import React from 'redux';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser, UserDetail } = this.props;
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
    UserDetail: (userlogindetails) => {
      dispatch(userLoginDetails(userlogindetails));
    },
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
