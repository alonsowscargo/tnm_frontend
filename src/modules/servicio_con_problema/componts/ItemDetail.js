import React from 'react'

const ItemDetail = ({ option = [] }) => {
  return (

    <div>
      {option.map((item, index) => (
        <div className="app-detail-item app-border" key={index}>
          <div className="app-item-40">
            <h4 className="text-xs font-weight-400"><b>{item.titulo_item} </b> {item.titulo === ''  ? 'sin sinformación': item.titulo }</h4>
          </div>

          <div className="app-item-20">
            <h5 className="text-xs font-weight-300">{item.fecha === '' ?  'sin formación' : (`${item.fecha} / ${item.hora} hrs`)} </h5>
          </div>

          <div className="app-item-25">
            <h5 className="text-xs font-weight-300">{item.conductor === '' ? 'sin sinformación' : item.conductor }</h5>
          </div>

          <div className="app-item-15">
            <h5 className="text-xs font-weight-300">{item.tracto === '' ? 'sin sinformación': item.tracto }</h5>
          </div>

          <div className="app-item-15">
            <h5 className="text-xs font-weight-300">{item.remolque === '' ? 'sin sinformación' : item.remolque }</h5>
          </div>
        </div>
      ))
      }

    </div>

  )
}

export default ItemDetail