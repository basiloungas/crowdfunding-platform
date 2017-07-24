import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {HugeLoader} from '../components/loader';
import {populateData} from '../reducers/populated/actions';
import {
  startSyncingData,
  stopSyncingData,
} from '../reducers/actions';

export class withDataAndHooksWrapper extends React.Component {
  componentDidMount() {
    if (this.props.isPopulated) {
      return;
    }

    this.props.populateData().then(() => this.props.startSyncingData());
  }

  componentWillUmount() {
    this.props.stopSyncingData();
  }

  render() {
    const {
      Component,
      isPopulated,
      isLoading,
    } = this.props;

    if (!isPopulated || isLoading) {
      return <HugeLoader />
    }

    return <Component {...this.props} />
  }
}

export default function withInitialData(Component) {
  const mapStateToProps = state => ({
    Component,
    isPopulated: state.populated.status,
    isLoading: state.populated.isLoading,
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      populateData,
      startSyncingData,
      stopSyncingData,
    },dispatch);
  };

  return connect(mapStateToProps, mapDispatchToProps)(withDataAndHooksWrapper);
}
