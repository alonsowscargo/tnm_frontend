import React from 'react';
import Servicios from './index.js';
import IntlMessages from 'util/IntlMessages';

class ServiciosConProblemasRoutes extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <Servicios match={this.props.match} title={<IntlMessages id="label.servicio"/>}/>
      </div>
    );
  }
}

export default ServiciosConProblemasRoutes


// import React from 'react';
// import Facturacion from './index.js';
// import IntlMessages from 'util/IntlMessages';

// class FactutacionRoutes extends React.Component {

//   render() {
//     return (
//       <div className="app-wrapper">
//         <Facturacion match={this.props.match} title={<IntlMessages id="label.facturacion"/>}/>
//       </div>
//     );
//   }
// }

// export default FactutacionRoutes;