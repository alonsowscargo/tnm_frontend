import React from 'react'
import { Link } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import { Badge } from 'reactstrap';
import 'react-circular-progressbar/dist/styles.css';


const ProgresBarMobile = () => {


    // estpas de seguimiento
    const etapaActual = 'Espera Consolidación';
    const mensajeEtapa = 'Lo sentimos, tus paquetes aún no han llegado a nuestras bodegas en China. Continuamos gestionado.';
    const percentage = 1;
    const modoRetiro = 'bodega';

    return (
        <div>
            <CircularProgressbar
                value={20}
                text={`${percentage} / 5`}
                className="progressbar-circle mb-4"
                strokeWidth={12}

                styles={{
                    path: {
                        // 
                        stroke: '#6FCF97',
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                        // Trail color
                        stroke: '#cfcece',
                        strokeLinecap: 'round',
                    },
                    // text
                    text: {
                        // Text color
                        fill: '#cfcece',
                        // Text size
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }
                }}
            />

            <div className="etapa">
                <p className="text font-weight-400 text-capitalize text-center  mb-2">
                    Etapa actual
                </p>
                <h4 className="title-h4 font-weight-900 text-capitalize text-center  mb-2">
                    {`${etapaActual}`}  
                </h4>
                <h5 className="title-h5 font-weight-500 text-center"> 
                    {`${modoRetiro}`} 
                </h5>

                <div className="border my-4"></div>

                <p className="text font-weight-400 text-center px-4">
                    {`${mensajeEtapa}`}
                </p>

                <div className="border my-4"></div>
            </div>

            <h4 className="title-h4 font-weight-800 text-capitalize padding-subtitle">próxima etapa</h4>
            <div className="ba mb-4">
                <div className="bap">
                    <div className="cards-icon icon-small mr-2"></div>
                    <p> Bodega China</p>
                </div>

                <div className="bap">
                    <div className="cards-icon mr-2"></div>
                    <p>En Consolidación</p>
                </div>

                <div className="bap">
                    <div className="cards-icon mr-2"></div>
                    <p>Transito</p>
                </div>
                <div className="bap">
                    <div className="cards-icon mr-2"></div>
                    <p>revisión aduana</p>
                </div>
            </div>
        </div>
    )
}

export default ProgresBarMobile
