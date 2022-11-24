import React from 'react'

const ItemDetail = ({ option = [] }) => {
  return (


    <div className='app-item-service'>
      {
        option.map((item, index) => (
          <div className="app-item mb-4" key={index}>
            <h3 className="text-xs font-weight-500">{item.titulo}</h3>
            <h4 className="text-xs font-weight-300">$ {item.content === '' ? '0' : item.content}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default ItemDetail