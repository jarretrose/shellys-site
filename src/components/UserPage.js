import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../store';
import PropTypes from 'prop-types';

const UserPage = (props) => {

    const { user, handleClick } = props;

    if (!user.id) return <Redirect to='/login' />

    return (
      <div>
        <h1>Welcome Back, {user.firstName}!</h1>
        <button onClick={handleClick}>Logout</button>
      </div>
      // eventually will create admin panel and user panel components 
    )
  };

UserPage.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => (dispatch(logout()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
