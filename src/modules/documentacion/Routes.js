import React from 'react';
import Documentacion from './index.js';
import IntlMessages from 'util/IntlMessages';

class DocumentacionRoutes extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Documentacion match={this.props.match} title={<IntlMessages id="label.documentacion"/>}/>
      </div>
    );
  }
}

export default DocumentacionRoutes;