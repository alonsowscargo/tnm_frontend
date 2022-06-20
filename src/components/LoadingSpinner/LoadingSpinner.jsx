import React from 'react'

const LoadingSpinner = ({title, className}) => {
    return (
        <div className={`loading-spinner ${className}`}>
            <div className="spinner2">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
            <h4 className="font-weight-700 mt-2">{title}</h4>
        </div>
    )
}

export default LoadingSpinner;