import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  firestoreConnect,
  isLoaded,
  isEmpty,
} from 'react-redux-firebase';
import TodoList from './TodoList';

const AuthLoading = ({ auth }) => {
  if (isEmpty(auth) || !isLoaded(auth)) {
    return null;
  }
  return (
    <TodoList />
  );
}

AuthLoading.propTypes = {
  auth: PropTypes.object,
};

export default compose(
  connect(({ firestore }) => ({
    auth: firestore.auth,
  })),
  firestoreConnect(),
)(AuthLoading);