import moment from 'moment';
import { nanoid } from 'nanoid';
const charactersLimit='0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
export const UserEmpty ={
    id:0,
    rut:'',
    nombre:'',
    password:'123456',
    usuario:'',
    apellidos:'',
    email:'',
    telefono:'',
    estado:1,
    fk_rol:0,
};
export const AddressEmpty={
    id:0,
    nombre:'',
    pais:'',
    region:'',
    comuna:'',
    direccion:'',
    numero:'',
    latitud:'',
    longitud:'',
    radio:'',
    usuario_id:0,
    direccion_tipo_id:0,
    observaciones:''
};

export const contactEmpty={
    id:0,
    nombre:'',
    apellidos:'',
    telefono:'',
    telefono2:'',
    email:'',
    forma_cargo:'',
    comentario:'',
    contacto_tipo_id:0,
    usuario_id:0
};

export const userBankAccountEmpty={
    id:0,
    banco_id:0,
    tipo_cuenta_id:0,
    cuenta:'',
    usuario_id:0
};

export const typeTracking={
    0:{
        id:0,
        nombre:'Manual'
    },
    1:{
        id:1,
        nombre:'Automatico'
    },
    2:{
        id:2,
        nombre:'Packing List' 
    }
};

export const stateTracking={
    0:{
        id:0,
        nombre:'Incompleto'
    },
    1:{
        id:1,
        nombre:'Completado'
    },
    2:{
        id:2,
        nombre:'Cargado en contenedor'
    }
};

export const stateContenedor={
    1:{
        id:1,
        nombre:'Creado'
    },
    2:{
        id:2,
        nombre:'Reservado'
    },
    3:{
        id:3,
        nombre:'Carga Parcial'
    },
    4:{
        id:4,
        nombre:'Carga completa'
    },
    5:{
        id:5,
        nombre:'Asignada a nave' 
    }
};

export const validationsUser={
    rut:{
        required:true,
        error:false,
        textError:'',
    },
    usuario:{
        required:true,
        error:false,
        textError:'',
    },
    nombre:{
        required:true,
        error:false,
        textError:'',
    },
    apellidos:{
        required:true,
        error:false,
        textError:'',
    },
    email:{
        required:true,
        error:false,
        textError:'',
    },
    fk_rol:{
        required:true,
        error:false,
        textError:'', 
    }
}

export const validationsUserContacts={
    nombre:{
        required:true,
        error:false,
        textError:'',
    },
    apellidos:{
        required:true,
        error:false,
        textError:'',
    },
    telefono:{
        required:true,
        error:false,
        textError:'',
    },
    email:{
        required:true,
        error:false,
        textError:'',
    },
    forma_cargo:{
        required:true,
        error:false,
        textError:'',
    },
    contacto_tipo_id:{
        required:true,
        error:false,
        textError:'',
    }
};

export const validationsUserNotes={
    nota:{
        required:true,
        error:false,
        textError:'',
    } 
};

export const validationsUserBankAccounts={
    banco_id:{
        required:true,
        error:false,
        textError:'',
    },
    tipo_cuenta_id:{
        required:true,
        error:false,
        textError:'',
    },
    cuenta:{
        required:true,
        error:false,
        textError:'',
    },
};

export const validationsPackageTracking={
    fecha_recepcion:{
        required:true,
        error:false,
        textError:'',
    },
    cantidad_bultos:{
        required:true,
        error:false,
        textError:'',
    },
    producto:{
        required:true,
        error:false,
        textError:'',
    },
    peso:{
        required:true,
        error:false,
        textError:'',
    },
    volumen:{
        required:true,
        error:false,
        textError:'',
    }, 
    tipo_producto:{
        required:true,
        error:false,
        textError:'',
    }, 
};

export const payloadNaveEtaEmpty={
    id:0,
    fk_nave:0,
    viaje_id:'',
    fk_puerto:0,
    eta_fecha:null,
    eta_hora:null,
    staa_fecha:null,
    staa_hora:null,
    stab_fecha:null,
    stab_hora:null,
    etd_fecha:null,
    etd_hora:null,
    estado:0
};

export const emptyDialogConfirmConsolidados={
    open:false,
    type:'',
    message:'',
    combine:{
        data1:null,
        data2:null,
    },
    dataAux:null
};

export const CLEAN_PAYLOAD_DIRECCION={
    fk_cliente:0,
    codigoPostal:"",
    comentario:"",
    direccion:"",
    estado:0,
    fk_comuna:0,
    fk_pais:0,
    fk_region:0,
    fk_tipo:0,
    id:0,
    lat:"",
    lon:"",
    nombre:"",
    numero:"",
    radio:"",
    referencia:""
};

export const payloadTracking={
    id:0,
    estado:0,
    tipo:0,
    prioridad:0,
    fecha_creacion:moment().format('YYYYMMDD HHmmss'),
    fk_cliente:null,
    fk_proveedor:null,
    proveedor:null,
    cantidad_bultos:0,
    fecha_recepcion:moment().format('YYYYMMDD HHmmss'),
    peso:0,
    volumen:0,
    tipo_carga:0,
    currier:null,
    tracking_detalle:[],
    grouped:[],
    dev_impuesto:false
}

export const payloadTrackingResidual={
    id:0,
    estado:1,
    tipo:0,
    prioridad:0,
    fecha_creacion:moment().format('YYYYMMDD HHmmss'),
    fk_cliente:null,
    fk_cliente_codigo:'',
    fk_cliente_razonsocial:'',
    fk_proveedor:null,
    fk_proveedor_codigo:'',
    fk_proveedor_nombre:'',
    cantidad_bultos:0,
    fecha_recepcion:moment().format('YYYYMMDD HHmmss'),
    peso:0,
    volumen:0,
    tipo_carga:0,
    currier:null,
    tracking_detalle:[],
    grouped:[],
    dev_impuesto:false,
    fk_tracking_origen:null,
    residual:true
};

export const payloadTrackingDetalle={
    id:0,fecha_recepcion:moment().format('YYYY-MM-DD'),fecha_consolidado:'',tipo_producto:0,producto:'',peso:null,observacion:'',estado:1,volumen:null, files:[],codigo_interno:nanoid(4,charactersLimit).toUpperCase(),cantidad_bultos:null,upload_id:null,ancho:null,alto:null,altura:null,pesoAux:null,fk_consolidado:0,ubicacion:null,currier:'',fk_currier:null,numero_seguimiento:'',observacion_ubicacion:''
}