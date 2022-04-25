import lodash from 'lodash';
import { nanoid } from 'nanoid';
import moment from 'moment';
export const groupedTrackingDetalle=(arr)=>{
    let grouped=[];
    if(arr && arr.length>0){
        for(var i=0;i<arr.length;i++){
            if(grouped.length===0){
                grouped.push({...arr[i],cantidad_bultos:1});
            }else{
                const find=grouped.findIndex(x=>x.codigo_interno==arr[i].codigo_interno && x.producto==arr[i].producto);
                if(find>=0){
                    let newItem=lodash.cloneDeep(grouped[find]);
                    newItem.peso= newItem.peso+arr[i].peso;
                    newItem.volumen= newItem.volumen+arr[i].volumen;
                    newItem.peso.toFixed(3);
                    newItem.volumen.toFixed(3);
                    newItem.cantidad_bultos= newItem.cantidad_bultos+1;
                    grouped[find]=newItem;
                }else{
                    grouped.push({...arr[i],cantidad_bultos:1});
                }
            }
        }
    }
    return grouped;
}

export const validationTrackings=(arr)=>{
    let newArray=[];
    if(arr && arr.length>0){
        for(let i=0;i<arr.length;i++){
           let countFails=0;let estado=0;
           
           if(arr[i].fk_cliente<1 || arr[i].fk_cliente==null){
                countFails++;
           }

           if((arr[i].fk_proveedor<1 || arr[i].fk_proveedor==null) && arr[i].proveedor==null){
                countFails++;
           }

           if(arr[i].tracking_detalle && arr[i].tracking_detalle.length>0){
                if(arr[i].cantidad_bultos>arr[i].tracking_detalle.length){
                    countFails++;
                }
           }else{
                countFails++;
           }

           if(countFails>0){
               estado=0;
           }else{
               estado=1;
           }
           newArray.push({...arr[i],estado:estado});
        }
    }

    return newArray;
}

export const isInteger =(x)=>{ return typeof x === "number" && isFinite(x) && Math.floor(x) === x; }

export const orderByIdDesc = (arr)=>{
    let aux=arr.sort(function(a, b) { 
        return b.id - a.id;
    });
    return aux;
}

export const orderByIdAsc = (arr)=>{
    let aux=arr;
    if(arr && arr.length>0){
        aux=arr.sort(function(a, b) { 
            return a.id - b.id;
        });
    }
    return aux;
}
const charactersLimit='0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
export const generateCode = (code,array)=>{
    if(array && array.length>0){
        let find=array.find(x=>x.codigo_interno===code);
        if(find){
            let newCode=nanoid(4,charactersLimit).toUpperCase();
            code=newCode;
        }
    }
    return code;    
}

export const prepareImagesDetail = (payload)=>{
    let array=[];
    if(payload && payload.length>0){
        for(let i=0;i<payload.length;i++){
            if(payload[i].tracking_detalle && payload[i].tracking_detalle.length>0){
                payload[i].tracking_detalle.map(function(item){
                    if(item.files && item.files.length>0){
                        let obj={upload_id:item.upload_id,id:payload[i].id,index:i,tracking_detalle:item.id};
                        for(let j=0;j<item.files.length;j++){
                            const count=j+1;
                            obj['foto'+count]=item.files[j];
                        }
                        array.push(obj);
                    }
                })
            }
        }
    }
    
    return array;
 }

 export const matchTrackingsWithImagesDetail= (arrFiles,arrTrackings) =>{
     let newArrFiles= lodash.cloneDeep(arrFiles);
     if(arrTrackings && arrTrackings.length>0){
        for(let i=0;i<arrTrackings.length;i++){
            if(newArrFiles && newArrFiles.length>0){
                for(let j=0;j<newArrFiles.length;j++){
                    if(newArrFiles[j].id===0){
                        if(arrTrackings[i].index===newArrFiles[j].index){
                            newArrFiles[j].id=arrTrackings[i].id;
                        }
                    }
                }
            }
        }
     }

     return newArrFiles;
 }

 export const prepareDocsTracking = (payload)=>{
    let array=[];
    if(payload && payload.length>0){
        for(let i=0;i<payload.length;i++){
            let exists=false;
            let obj={id:payload[i].id,index:i};
            if(payload[i].packing_list_files && payload[i].packing_list_files.length>0){
                for(let j=0;j<payload[i].packing_list_files.length;j++){
                    let attr='packingList'+(j+1);
                    obj[attr]=payload[i].packing_list_files[j];
                    exists=true;
                }
            }

            if(payload[i].invoice_files && payload[i].invoice_files.length>0){
                for(let j=0;j<payload[i].invoice_files.length;j++){
                    let attr='invoice'+(j+1);
                    obj[attr]=payload[i].invoice_files[j];
                    exists=true;
                }
            }
            if(exists){
                array.push(obj);
            }
           
        }
    }
    return array;
 }

 export const matchTrackingsWithDocs= (arrFiles,arrTrackings) =>{
    let newArrFiles= lodash.cloneDeep(arrFiles);
    if(arrTrackings && arrTrackings.length>0){
       for(let i=0;i<arrTrackings.length;i++){
           if(newArrFiles && newArrFiles.length>0){
               for(let j=0;j<newArrFiles.length;j++){
                   if(newArrFiles[j].id===0){
                       if(arrTrackings[i].index===newArrFiles[j].index){
                           newArrFiles[j].id=arrTrackings[i].id;
                       }
                   }
               }
           }
       }
    }

    return newArrFiles;
}

export const orderByAtributte = (arr,option,order) =>{

    let aux=arr;
    if(arr && arr.length>0){
        if(order!='null'){
            aux=arr.sort(function(a, b) { 
                if(order==='asc'){
                    if('primera_recepcion' || 'ultima_recepcion' || 'fecha_recepcion'){
                        return moment.utc(a[option]).diff(moment.utc(b[option]))
                    }else{
                        return a[option] - b[option];
                    }
                    
                }else if(order==='desc'){
                    if('primera_recepcion' || 'ultima_recepcion' || 'fecha_recepcion'){
                        return moment.utc(b[option]).diff(moment.utc(a[option]))
                    }else{
                        return b[option] - a[option];
                    }
                    
                }
            });
        }else{
            let sinCliente=[];
            let conCliente=[];
            sinCliente=aux.filter(x=>x.fk_cliente===null);
            conCliente=aux.filter(x=>x.fk_cliente!=null);
            let newArr=sinCliente.concat(conCliente);
            aux=newArr;
        }
    }
    return aux;
}