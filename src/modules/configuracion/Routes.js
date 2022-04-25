import React from 'react';
import Configuracion from './index';
import IntlMessages from 'util/IntlMessages';

class ConfiguracionRoute extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Configuracion match={this.props.match} title={<IntlMessages id="label.configuracion"/>}/>
      </div>
    );
  }
}

export default ConfiguracionRoute;