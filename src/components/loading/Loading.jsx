import React from 'react'
// import { Spinner } from 'reactstrap'
// import logoWsCargo from './logoWsCargo.svg'

const Loading = () => {

    return (
        <div className="bg-loading">
                {/* opción 1 */}
                {/* <Spinner /> */}
                 {/* opción 2 */}
                <div className="text-center">
                    <img src={require("assets/images/LogoTnm.png")} className="animate" alt="transporte nueno mundo"/>
                    {/* <h3 className='title-h4 font-weight-500 mt-3 animate'>{title}</h3> */}
                </div>
        </div>
    )
}

export default Loading
