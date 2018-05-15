import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    return <View />;
  }
}

const mapStateToProps = (state) => {
  console.log(state.libraries);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
