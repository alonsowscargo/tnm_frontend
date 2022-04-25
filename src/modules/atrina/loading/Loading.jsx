import React from 'react'
import { Spinner } from 'reactstrap'
import logoWsCargo from './logoWsCargo.svg'

const Loading = () => {

    return (
        <div className="bg-loading">
                {/* opción 1 */}
                {/* <Spinner /> */}
                 {/* opción 2 */}
                <img src={logoWsCargo}  class="animate" alt="logo ws cargo"/>
        </div>
    )
}

export default Loading
