import React from 'react';
import MantenedorUsuariosForm from './index';
import IntlMessages from 'util/IntlMessages';

class MantenedorUsuarios extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <MantenedorUsuariosForm match={this.props.match} title={<IntlMessages id="label.usuarios"/>}/>
      </div>
    );
  }
}

export default MantenedorUsuarios;