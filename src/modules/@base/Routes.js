import React from 'react';
import Form from './Form.js';
import IntlMessages from 'util/IntlMessages';

class contactosTipos extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Form match={this.props.match} title={<IntlMessages id="label.contactosTipos"/>}/>
      </div>
    );
  }
}

export default contactosTipos;