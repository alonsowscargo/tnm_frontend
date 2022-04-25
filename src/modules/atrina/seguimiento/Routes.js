import React from 'react';
import Form from './index.js';
import IntlMessages from 'util/IntlMessages';

class atrina extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Form match={this.props.match} title={<IntlMessages id="label.atrina"/>}/>
      </div>
    );
  }
}

export default atrina;