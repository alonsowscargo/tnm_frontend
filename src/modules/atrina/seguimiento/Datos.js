
export const Datos = [
    {
        id: '1',
        content: {
            obj: [ 
                [   
                    { title: 'Recepción', descripcion: '25/09/21' },
                    { title: 'Producto', descripcion: 'Sillas Gamer' },
                    { title: 'Peso', descripcion: '3 kg' },
                    { title: 'Volumen', descripcion: '1000 (m³)' },
                    { title: 'documentos', packingList: 'packing List', invoice: 'Invoice' }
                ]
            ]
        }
    },
    {
        id: '2',
        content: {
            obj: [ 
                [   
                    { title: 'Recepción', descripcion: '25/09/21' },
                    { title: 'Producto', descripcion: 'Sillas Gamer' },
                    { title: 'Peso', descripcion: '3 kg' },
                    { title: 'Volumen', descripcion: '1000 (m³)' },
                    { title: 'documentos', packingList: 'packing List', invoice: 'Invoice' }
                ],
                [   
                    { title: 'Recepción', descripcion: '25/09/21' },
                    { title: 'Producto', descripcion: 'Sillas Gamer' },
                    { title: 'Peso', descripcion: '3 kg' },
                    { title: 'Volumen', descripcion: '1000 (m³)' },
                    { title: 'documentos', packingList: 'packing List', invoice: 'Invoice' }
                ],
                [   
                    { title: 'Recepción', descripcion: '25/09/21' },
                    { title: 'Producto', descripcion: 'Sillas Gamer' },
                    { title: 'Peso', descripcion: '3 kg' },
                    { title: 'Volumen', descripcion: '1000 (m³)' },
                    { title: 'documentos', packingList: 'packing List', invoice: 'Invoice' }
                ]
            ]
        }
    }
]


/* recuerda poner la propiedad obj en el array
Datos.map(function(item,index){
    return(
        <li>
            {item.content.map(function(element,index2){
                return(
                    element.obj.map(function(item3,index3){
                            return(
                                <p>{item3.title} / {item3.descripcion}</p>
                            )
                    })

                )

            })}
        </li>
    )
})*/