import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load as loadSite, update as updateSite } from './SiteReducer';
import SiteView from './SiteView';

class SiteContainer extends React.Component {
  componentDidMount() {
    this.props.loadSite(this.props.params.id);
  }

  render() {
    if (this.props.loading) {
      return <div>Loading Site...</div>;
    }
    if (this.props.error) {
      return <div>Whoops something is wrong...</div>;
    }
    return <SiteView {...this.props} />;
  }
}

SiteContainer.propTypes = {
  loadSite: PropTypes.func
};

const mapStateToProps = state => ({
  error: state.sites.error,
  loading: state.sites.loading,
  site: state.site.data,
  flags: state.site.data.flags
});

const mapDispatchToProps = {
  loadSite,
  updateSite
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteContainer);
