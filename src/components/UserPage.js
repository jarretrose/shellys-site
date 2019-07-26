import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getMe, logout } from '../store';

const UserPage = (props) => {

    const { user, handleClick } = props;

    if (!user.id) return <Redirect to='/login' />

    return (
      <div>
        <h1>User</h1>
        <button onClick={handleClick}>Logout</button>
      </div>
      // eventually will create admin panel and user panel components 
    )
  };

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => (dispatch(logout()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
