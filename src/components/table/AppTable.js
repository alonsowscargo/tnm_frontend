import React from 'react'

const AppTable = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default AppTable