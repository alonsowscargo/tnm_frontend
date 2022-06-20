export const data = [
    {
        id:"1",
        cliente_despacho: [
            {
                titulo:'Vanni',
            }
        ],
        contenedor: 'TXGU667807-7',
        tipo: 'Dry',
        tamano: 40,
        nave: 'Msc ruby',
        eta: '14-02-202',
        referencia:'OC58639',
        servicio:'IMPO',
        dias_libres:'',
        fecha_limite:'22/04/22',
        n_reserva:'',
        kg:'14.9',
        dia_libre: [
            {
                dia:'Retiro Full',
                fecha:'10-03-2022',
                hora:'12:30',
                responsable:'Osvaldo Antonio Escalona Avedaño',
            }
        ],
        tracking_retiro: [
            {
                titulo:'Retiro Full',
                fecha:'10-03-2022',
                hora:'12:30',
                conductor:'Osvaldo Antonio Escalona Avedaño',
                almacenaje:'TNM SAI',
            }
        ],
        tracking_presentación: [
            {
                titulo:'Presentación Cliente',
                fecha:'15-03-2022',
                hora:'08:30',
                conductor:'Sergo Bastian Vega Vega',
                docs:true,
            }
        ],
        tracking_devolucion: [
            {
                titulo:'pendiente',
                fecha:'15-03-2022',
                hora:'08:30',
                conductor:'Sergo Bastian Vega Vega',
                docs:true,
            }
        ]
    },
    {
        id:"2",
        cliente_despacho: 'alonso',
        contenedor: 'TX',
        tipo: 'Dry',
        tamano: 89,
        nave: 'Ms',
        eta: '14-02-202',
        referencia:'OC539',
        servicio:'IMO',
        dias_libres:'',
        fecha_limite:'04/22',
        reserva:'iopwefqe',
        kg:'14.9fevrg',
        tracking:[
            {
                titulo:'Retiro Full',
                tipo:'Saam Sai',
                fecha:'10-03-2022',
                hora:'12:30',
                conductor:'Osvaldo Antonio Escalona Avedaño',
                almacenaje:'TNM SAI',
                // docs_guia:false,
                // docs_guia_state:false,
                // docs_eir:false,
                // docs_eir_state:false
            },
            {
                titulo:'Presentación Cliente',
                tipo:'',
                fecha:'15-03-2022',
                hora:'08:30',
                conductor:'Sergo Bastian Vega Vega',
                // almacenaje:'',
                docs_guia:true,
                docs_guia_state:0, // estado  1 active - 0 disabled 
                // docs_eir:false,
                // docs_eir_state:false
            },
            {
                titulo:'Presentación Cliente',
                tipo:'DYC VALPARAIS',
                fecha:'15-03-2022',
                hora:'14:30',
                conductor:'Sergo Bastian Vega Vega',
                // almacenaje:'',
                // docs_guia:false,
                // docs_guia_state:false,
                docs_eir:true,
                docs_eir_state:1  // estado  1 active - 0 disabled 
            }
        ]
    },
    {
        id:"1",
        client_dispatch:'Vanni',
        container: 'TXGU667807-7',
        type: 'dry',
        size: 40,
        ship: 'Msc ruby',
        eta: '14-02-202',
        reference:'OC58639',
        service:'IMPO',
        free_days:5,
        deadline_date:'04/22/22',
        n_reservation: '',
        kg:'14.9',
        tracking_withdraw: [
            {
                title:'Full Retirement',
                date:'10-03-2022',
                time:'12:30',
                conductor: 'Osvaldo Antonio Escalona Avedaño',
                storage:'TNM UPS',
            }
        ],
        tracking_presentation: [
            {
                title:'Client Presentation',
                date:'15-03-2022',
                time:'08:30',
                host: 'Sergo Bastian Vega Vega',
                docs:true,
            }
        ],
        tracking_return: [
            {
                title:'pending',
                date:'15-03-2022',
                time:'08:30',
                host: 'Sergo Bastian Vega Vega',
                docs:true,
            }
        ]
    }
]
