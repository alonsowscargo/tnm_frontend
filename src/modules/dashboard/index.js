import React, { useEffect, useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom"


import userPng from "../../assets/images/warning.png";
import Loading from "components/loading/Loading";

const Dashboard = () => {
  return (
    <div>
      <div className="justify-space-between">
        <div>
          <h4>Bienvenido</h4>
          <h2>Dash BOARD</h2>
        </div>

        {/* <ul className="app-nav">
          <li><Link to="/app/reportes" exact={"true"}>Reportes</Link></li>
          <li><Link to="/app/documentacion" exact={"true"}>Documentación</Link></li>
          <li><Link to="/app/facturacion" exact={"true"}>Facturación</Link></li>
        </ul> */}
      </div>
      {/* <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button> */}
    </div>
  )
};

export default Dashboard;
