import React from 'react';
import Dashboard from './index.js';
import IntlMessages from 'util/IntlMessages';

class DashboardRoutes extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Dashboard match={this.props.match} title={<IntlMessages id="label.dashboard"/>}/>
      </div>
    );
  }
}

export default DashboardRoutes;