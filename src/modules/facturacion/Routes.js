import React from 'react';
import Facturacion from './index.js';
import IntlMessages from 'util/IntlMessages';

class FactutacionRoutes extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Facturacion match={this.props.match} title={<IntlMessages id="label.facturacion"/>}/>
      </div>
    );
  }
}

export default FactutacionRoutes;