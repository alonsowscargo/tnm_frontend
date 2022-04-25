import React from 'react';
import Form from './Form.js';
import IntlMessages from 'util/IntlMessages';

class roles extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Form match={this.props.match} title={<IntlMessages id="label.roles"/>}/>
      </div>
    );
  }
}

export default roles;