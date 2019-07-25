import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getMe, logout } from '../store';

class UserPage extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { checkUser } = this.props;
    checkUser()
  }

  render() {
    const { user, handleClick } = this.props;

    if (!user.id) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <h1>User</h1>
        <button onClick={handleClick}>Logout</button>
      </div>
      // eventually will create admin panel and user panel components 
    )
  }
};

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch => {
  return {
    checkUser: () => (dispatch(getMe())),
    handleClick: () => (dispatch(logout()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
