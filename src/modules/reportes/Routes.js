import React from 'react';
import Reportes from './index.js';
import IntlMessages from 'util/IntlMessages';

class ReportesRoutes extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Reportes match={this.props.match} title={<IntlMessages id="label.reportes"/>}/>
      </div>
    );
  }
}

export default ReportesRoutes;