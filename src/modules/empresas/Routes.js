import React from 'react';
import Form from './Form.js';
import IntlMessages from 'util/IntlMessages';

class empresas extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Form match={this.props.match} title={<IntlMessages id="label.empresas"/>}/>
      </div>
    );
  }
}

export default empresas;