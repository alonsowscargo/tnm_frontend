import React,{useEffect, useState, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, ModalHeader,ModalBody} from 'reactstrap';
import CloseIcon from '@material-ui/icons/Close';
import IntlMessages from 'util/IntlMessages';
import IconButton from '@material-ui/core/IconButton';
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './StyleModal.scss';
import Button from '@material-ui/core/Button';
import { size } from 'lodash';
import { QRCode } from "react-qr-svg";
const EtiquetaPdf = (props) => {

    const dispatch = useDispatch();
    const {
        propuestaEtiquetaQr
    } = useSelector(({propuestaComercialMaintainer}) => propuestaComercialMaintainer);
    const componentRef = useRef();

    return (
        <div>
        { propuestaEtiquetaQr.length>0 && propuestaEtiquetaQr.map( function(item,index){ return (
            <div>
                <div className="Etiqueta_Page">
                <div className="row mt-3 mb-3 col-12">
                    <div className="col-6 text-center">
                        <img width="200px" src="../../Logo.jpg"/>
                    </div>
                    <div className="col-6 text-center">
                        <u className="text_sin_salto Etiqueta_Page_Titulo"><strong>货物信息</strong></u>
                    </div>
                </div>
                <div className="row col-12 text-left">
                    <u className="Etiqueta_Page_SubTitulo"><strong>收货人信息</strong></u>
                </div>
                <div className="col-12 text-left Etiqueta_Page_Contenido">
                    <div className="row mt-0 mb-0">
                        <div className="col-3 mt-0 mb-0">
                            <p><strong>收货人公司名:</strong></p>
                        </div>
                        <div className="col-9 mt-0 mb-0">
                            <p>{item.nombre}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p><strong>税号:</strong></p>
                        </div>
                        <div className="col-9">
                            <p>{item.rut}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p><strong>地址:</strong></p>
                        </div>
                        <div className="col-9">
                            <p>{item.direccion}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p><strong>电话:</strong></p>
                        </div>
                        <div className="col-9">
                            <p>{item.telefono1}</p>
                        </div>
                    </div>
                </div>
                <div className="row col-12 text-left Etiqueta_Page_Contenido">
                        <strong>在智利需要的清关</strong> 资料
                </div>
                <div className="row Etiqueta_Page_Contenido">
                    <div className="col-2"></div>
                    <div className="col-7 text-rigth">
                        <p className="text_sin_salto"><strong>装箱单 （中文或者英文）</strong></p>
                        <br></br>
                        <p className="text_sin_salto"><strong>发票 （中文或者英文）</strong></p>
                    </div>
                    <div className="col-3 text-center etiqueta_link">
                        <strong><a href="https://f09af8c1-68fe-4f82-8dfc-44545c0f2e5d.usrfiles.com/ugd/f09af8_3a021c4e46dc4ded9361df13f9191d38.xlsx">LINK</a></strong>
                    </div>
                </div>
                <div className="mt-1 col-12 text-left Etiqueta_Page_Contenido">
                    <u><strong>中国收货人和仓库地址</strong></u>
                </div>
                <div className="row mt-3 col-12 text-center Etiqueta_Page_SubTitulo">
                    <strong>麻烦同一位客人的货物，尽量安排一次寄完，不要分几次寄。谢谢。</strong>
                </div>
                <div className="mt-3 col-12 Etiqueta_Page_Contenido text_sin_salto">
                    <div className="row">
                        <div className="col-3 text-left">
                            <p><strong>联系人姓名:</strong></p>
                        </div>
                        <div className="col-9 text-left">
                            <p>小余</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-left">
                            <p><strong>电话:</strong></p>
                        </div>
                        <div className="col-9 text-left">
                            <p>18069978687</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-left">
                            <p><strong>仓库地址:</strong></p>
                        </div>
                        <div className="col-9 text-left">
                            <p>浙江省义乌市廿三里街道大通路1217号（金色棉田对 面）导航；金色棉田</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-left">
                            <p><strong>电话:</strong></p>
                        </div>
                        <div className="col-9 text-left">
                            <p>{item.telefono1}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 text-center">
                            <img width="800px" src="../../MapaEtiqueta.png"/>
                    </div>
                </div>
                <div className="row mt-3 Etiqueta_Page_SubTitulo">
                    <div className="col-12 text-center">
                        <p><strong>请把以下标签贴在每一个箱子上</strong></p>
                    </div>
                </div>
        </div>
        <div className="salto_pagina"></div>
        <div className="Etiqueta_Page">
            <div className="row mt-5">
                <div className="col-12 text-center Etiqueta_Page_SubTitulo">
                    <p><strong>请把以下标签贴在每一个箱子上</strong></p>
                </div>
            </div>
            <br></br>
            <div className="Etiqueta_Page_Boder_Box Etiqueta_Page_Contenido p-1">
                <div className="row mt-5">
                    <div className="col-2">
                        <QRCode
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                            level="Q"
                            style={{width:100}}
                            value={"wsc_"+item.id}
                        />
                    </div>
                    <div className="col-5 text-center">
                        <img width="150px" src="../../Logo.jpg"/>
                    </div>
                    <div className="col-5 text-center Etiqueta_Page_Titulo">
                        <p className="text_sin_salto"><strong>标签</strong></p>
                    </div>
                </div>
                <div className="row mt-3 Etiqueta_Page_Contenido">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Id Cliente:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.codigo}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Razón Social:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.razonSocial}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>RUT:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.rut}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Dirección:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.direccion}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="col-12"><strong>第几箱</strong></div>
                                <div className="col-12 border border-dark">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="col-12"><strong>共几箱</strong></div>
                                <div className="col-12 border border-dark">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 text-left">
                        <p><strong>Teléfono:</strong></p>
                    </div>
                    <div className="col-9 text-left">
                        <p>{item.telefono1}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 text-left">
                        <p><strong>发货工厂名称</strong></p>
                    </div>
                    <div className="col-9 border border-dark">
                        <br></br>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="Etiqueta_Page_Boder_Box Etiqueta_Page_Contenido p-1">
                <div className="row mt-5">
                    <div className="col-2">
                        <QRCode
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                            level="Q"
                            style={{width:100}}
                            value={item.id}
                        />
                    </div>
                    <div className="col-5 text-center">
                        <img width="150px" src="../../Logo.jpg"/>
                    </div>
                    <div className="col-5 text-center Etiqueta_Page_Titulo">
                        <p className="text_sin_salto"><strong>标签</strong></p>
                    </div>
                </div>
                <div className="row mt-3 Etiqueta_Page_Contenido">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Id Cliente:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.codigo}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Razón Social:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.razonSocial}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>RUT:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.rut}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Dirección:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.direccion}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="col-12"><strong>第几箱</strong></div>
                                <div className="col-12 border border-dark">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="col-12"><strong>共几箱</strong></div>
                                <div className="col-12 border border-dark">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 text-left">
                        <p><strong>Teléfono:</strong></p>
                    </div>
                    <div className="col-9 text-left">
                        <p>{item.telefono1}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 text-left">
                        <p><strong>发货工厂名称</strong></p>
                    </div>
                    <div className="col-9 border border-dark">
                        <br></br>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="Etiqueta_Page_Boder_Box Etiqueta_Page_Contenido p-1">
                <div className="row mt-5">
                    <div className="col-2">
                        <QRCode
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                            level="Q"
                            style={{width:100}}
                            value={item.id}
                        />
                    </div>
                    <div className="col-5 text-center">
                        <img width="150px" src="../../Logo.jpg"/>
                    </div>
                    <div className="col-5 text-center Etiqueta_Page_Titulo">
                        <p className="text_sin_salto"><strong>标签</strong></p>
                    </div>
                </div>
                <div className="row mt-3 Etiqueta_Page_Contenido">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Id Cliente:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.codigo}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Razón Social:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.razonSocial}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>RUT:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.rut}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-left">
                                <p><strong>Dirección:</strong></p>
                            </div>
                            <div className="col-9 text-left">
                                <p>{item.direccion}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="col-12"><strong>第几箱</strong></div>
                                <div className="col-12 border border-dark">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="col-12"><strong>共几箱</strong></div>
                                <div className="col-12 border border-dark">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 text-left">
                        <p><strong>Teléfono:</strong></p>
                    </div>
                    <div className="col-9 text-left">
                        <p>{item.telefono1}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 text-left">
                        <p><strong>发货工厂名称</strong></p>
                    </div>
                    <div className="col-9 border border-dark">
                        <br></br>
                    </div>
                </div>
            </div>
            <br></br>                        
            
        </div>
        </div>
            )})}
        </div>
    )
};
export default EtiquetaPdf;