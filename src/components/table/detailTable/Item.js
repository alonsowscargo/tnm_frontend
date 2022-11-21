import React from 'react'

const Item = ({data = [], className}) => {
  return (
    <div className={'app-item-service ' + (className)}>
      {data.map((item, index) => (
        <div className="app-item mb-4" key={index}>
          <h3 className="text-xs text-color-light-primary font-weight-500">{item.titulo}</h3>
          <h4 className="text-xs font-weight-300">{item.data === '' ? 'No aplica': item.data }</h4>
        </div>
      ))
      }
    </div>
  )
}

export default Item