import React from 'react'
import ControlServicioCliente from './index.js';

const Routes = () => {
  return (
    <div className="app-wrapper">
        <ControlServicioCliente/>
    </div>
  )
}

export default Routes




// import React from 'react';
// import ControlServicioCliente from './index.js';
// // import IntlMessages from 'util/IntlMessages';

// class controlServicio extends React.Component {

//   render() {
//     return (
//       <div className="app-wrapper">
//         <ControlServicioCliente match={this.props.match} title={<IntlMessages id="label.control"/>}/>
//       </div>
//     );
//   }
// }

// export default controlServicio;