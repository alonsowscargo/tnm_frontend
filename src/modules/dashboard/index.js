   import React,{useEffect, useState,useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ToastContainer, toast } from 'react-toastify';
import {FormGroup, Label, Input} from 'reactstrap';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from 'react-data-table-component';
import TextField from '@material-ui/core/TextField';
import IntlMessages from 'util/IntlMessages';
import moment from 'moment';
/*import ModalClientes from './ModalClientes';*/
/*
import{
  Cli_Get_Cliente
} from 'modules/clientes/Actions';*/
import {
    hideMessageDashboard,
    setShowListClientesSrldDashboard,
    showModalEditarClienteDashboard,
    closeModalEditarClienteDashboard,
    getDashboardClientesSinRepresentanteLegalDocumentacion,
    getReportePropuestasDashboard,
    getReporteClientesCreadosDashboard,
    getReporteTrackingsCreadosDashboard,
    setLoaderDashboard
} from './Actions';
import userPng from '../../assets/images/warning.png';
import Loading from 'components/loading/Loading';

import {
    IconEdit2x,
    IconClose3x,
    Col6M0,
  } from 'modules/Diccionario.js';


const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <div className="row float-right">
      <TextField id="search" type="text" placeholder="Filter" aria-label="Search Input" value={filterText} onChange={onFilter} />
      <i className={IconClose3x} onClick={onClear} title="CERRAR"></i>
    </div>
  );

am4core.useTheme(am4themes_animated);

const colors=['#FF33FF','#3f51b9','#52C85C','#E8DA09','#F04834','#34AAF0','#9B34F0','#9A6425','#41027B']; //rosa, azul, verde,amarillo,rojo,celeste,morado,cafe,lila oscuro
const Dashboard=(props)=>{
    const dispatch = useDispatch();
    const CHART_ID = 'population_chart';
    const CHART_ID1 = 'population_chart1';
    const CHART_ID2 = 'population_chart2';
   
    const chartRef = useRef(null);
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const {
        loader,
        alertMessage,
        showMessage,
        clientNotifications,
        activeList,
        modalEditarCliente,
        reportePropuestas,
        reporteClientesCreados,
        reporteTrackingsCreados,
        comerciales
      } = useSelector(({Dashboard}) => Dashboard);
    
      const [comer,setComer] = React.useState(comerciales);
      const [data, setData] = React.useState(reportePropuestas);
      const [data1, setData1] = React.useState(reporteClientesCreados);
      const [data2, setData2] = React.useState(reporteTrackingsCreados);
      const [reporte,setReporte] =React.useState(0);
      const [desde, setDesde] = React.useState(moment().format('YYYY-MM'));
      const [hasta, setHasta] = React.useState(moment().format('YYYY-MM'));




      React.useEffect(() => {
        if(reportePropuestas.length===0){
          dispatch(setLoaderDashboard(true));
          dispatch(getReportePropuestasDashboard({fecha:moment(desde).format('YYYYMM')}));
        }
      }, []);

       // Handle component unmounting, dispose chart
  React.useEffect(() => {
    return () => {
      chartRef.current && chartRef.current.dispose();
    };
  }, []);

  React.useEffect(() => {
    return () => {
      chartRef1.current && chartRef1.current.dispose();
    };
  }, []);

  React.useEffect(() => {
    return () => {
      chartRef2.current && chartRef2.current.dispose();
    };
  }, []);
    
  const getColor=(index)=>{
    if(index==1){
      return colors[7];
    }else if(index==2){
      return colors[0];
    }else if(index==3){
      return colors[2];
    }else if(index==4){
      return colors[1];
    }else if(index==5){
      return colors[3];
    }else if(index==6){
      return colors[4];
    }else if(index==7){
      return colors[5];
    }else if(index==8){
      return colors[6];
    }else if(index==9){
      return colors[8];
    }
  };
    /*  React.useEffect(() => {
        setData(reportePropuestas);
      }, [reportePropuestas]);*/

    
      React.useEffect(() => {

        if (reportePropuestas && reportePropuestas.length>0) {
          chartRef.current = am4core.create(CHART_ID, am4charts.XYChart);
          chartRef.current.data=reportePropuestas;
         
          var categoryAxis = chartRef.current.xAxes.push(new am4charts.CategoryAxis());
          categoryAxis.dataFields.category = "fecha";
          categoryAxis.renderer.minGridDistance = 40;
          categoryAxis.title.text = "Propuestas Creadas";

          var valueAxis = chartRef.current.yAxes.push(new am4charts.ValueAxis());
          valueAxis.title.text = "Cantidad (#)";

          if(chartRef.current.data.length>0){
              if(chartRef.current.data[0].count){
                for(let j=0;j<parseInt(chartRef.current.data[0].count);j++){
                  var series = chartRef.current.series.push(new am4charts.ColumnSeries());
                  series.dataFields.valueY = "propuestas"+(j+1);
                  series.dataFields.categoryX = "fecha";
                  series.name = chartRef.current.data[0]['comercial'+(j+1)];
                  series.tooltipText = "{name}: [bold]{valueY}[/]";
                  series.columns.template.fill = am4core.color(getColor(j+1));
                  series.stacked = true;
                }
              }
          }
          
          // Add legend
          chartRef.current.legend = new am4charts.Legend();

          // Add cursor
          chartRef.current.cursor = new am4charts.XYCursor();

          // Add simple vertical scrollbar
          chartRef.current.scrollbarY = new am4core.Scrollbar();

          // Add horizotal scrollbar with preview
          var scrollbarX = new am4charts.XYChartScrollbar();
          scrollbarX.series.push(series);
          chartRef.current.scrollbarX = scrollbarX;
        }
        return () => {
          chartRef.current && chartRef.current.dispose();
        };
      }, [reportePropuestas]);


      React.useEffect(() => {
        if (reporteClientesCreados && reporteClientesCreados.length>0) {
          chartRef1.current = am4core.create(CHART_ID1, am4charts.XYChart);
          chartRef1.current.data =reporteClientesCreados;

          
         
          var categoryAxis = chartRef1.current.xAxes.push(new am4charts.CategoryAxis());
          categoryAxis.dataFields.category = "fecha";
          categoryAxis.renderer.minGridDistance = 40;
          categoryAxis.title.text = "Clientes Creados";

          var valueAxis = chartRef1.current.yAxes.push(new am4charts.ValueAxis());
          valueAxis.title.text = "Cantidad (#)";

          if(chartRef1.current.data.length>0){
            if(chartRef1.current.data[0].count){
              for(let j=0;j<parseInt(chartRef1.current.data[0].count);j++){
                var series = chartRef1.current.series.push(new am4charts.ColumnSeries());
                series.dataFields.valueY = "clientes"+(j+1);
                series.dataFields.categoryX = "fecha";
                series.name = chartRef1.current.data[0]['comercial'+(j+1)];
                series.tooltipText = "{name}: [bold]{valueY}[/]";
                series.columns.template.fill = am4core.color(getColor(j+1));
                series.stacked = true;
              }
            }
        }
    
          // Add legend
          chartRef1.current.legend = new am4charts.Legend();

          // Add cursor
          chartRef1.current.cursor = new am4charts.XYCursor();

          // Add simple vertical scrollbar
          chartRef1.current.scrollbarY = new am4core.Scrollbar();

          // Add horizotal scrollbar with preview
          var scrollbarX = new am4charts.XYChartScrollbar();
          scrollbarX.series.push(series);
          chartRef1.current.scrollbarX = scrollbarX;
        }
        
        return () => {
          chartRef1.current && chartRef1.current.dispose();
        };
      }, [reporteClientesCreados]);

      React.useEffect(() => {
        if (reporteTrackingsCreados && reporteTrackingsCreados.length>0) {
          chartRef2.current = am4core.create(CHART_ID2, am4charts.XYChart);
          chartRef2.current.data =reporteTrackingsCreados;

          
         
          var categoryAxis = chartRef2.current.xAxes.push(new am4charts.CategoryAxis());
          categoryAxis.dataFields.category = "fecha";
          categoryAxis.renderer.minGridDistance = 40;
          categoryAxis.title.text = "Recepciones";

          var valueAxis = chartRef2.current.yAxes.push(new am4charts.ValueAxis());
          valueAxis.title.text = "Cantidad (#)";

          if(chartRef2.current.data.length>0){
            if(chartRef2.current.data[0].count){
              for(let j=0;j<parseInt(chartRef2.current.data[0].count);j++){
                var series = chartRef2.current.series.push(new am4charts.ColumnSeries());
                series.dataFields.valueY = "recepciones"+(j+1);
                series.dataFields.categoryX = "fecha";
                series.name = chartRef2.current.data[0]['comercial'+(j+1)];
                series.tooltipText = "{name}: [bold]{valueY}[/]";
                series.columns.template.fill = am4core.color(getColor(j+1));
                series.stacked = true;
              }
            }
        }

            /*
            var series = chartRef2.current.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "cantidad";
            series.dataFields.categoryX = "item";
            series.name = "Trackings Creados";
            series.tooltipText = "{name}: [bold]{valueY}[/]";
            series.columns.template.fill = am4core.color("#3f51b5");*/
    
          // Add legend
          chartRef2.current.legend = new am4charts.Legend();

          // Add cursor
          chartRef2.current.cursor = new am4charts.XYCursor();

          // Add simple vertical scrollbar
          chartRef2.current.scrollbarY = new am4core.Scrollbar();

          // Add horizotal scrollbar with preview
          var scrollbarX = new am4charts.XYChartScrollbar();
          scrollbarX.series.push(series);
          chartRef2.current.scrollbarX = scrollbarX;
        }
        
        return () => {
          chartRef2.current && chartRef2.current.dispose();
        };
      }, [reporteTrackingsCreados]);
    
       // Load data into chart
  React.useEffect(() => {
    if (chartRef.current) {
      //setData(reportePropuestas);
      chartRef.current.data = reportePropuestas;
    }
  }, [reportePropuestas]);

  React.useEffect(() => {
    if (chartRef1.current) {
      chartRef1.current.data = reporteClientesCreados;
    }
  }, [reporteClientesCreados]);

  React.useEffect(() => {
    if (chartRef2.current) {
      chartRef2.current.data = reporteTrackingsCreados;
    }
  }, [reporteTrackingsCreados]);

 
  
 

    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const [localList,setLocalList]=React.useState([]);
    const [styleChart, setStyleChart] = React.useState(
      { 
        width: '100%', 
        height: '500px', 
        margin: '50px 0',
        display:''
      }
    );

    const [styleChart1, setStyleChart1] = React.useState(
      { 
        width: '100%', 
        height: '500px', 
        margin: '50px 0',
        display:'none'
      }
    );

    const [styleChart2, setStyleChart2] = React.useState(
      { 
        width: '100%', 
        height: '500px', 
        margin: '50px 0',
        display:'none'
      }
    );

    React.useEffect(() => {
      if(activeList){
        setStyleChart(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );

        setStyleChart1(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );

        setStyleChart2(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );
      }else{
        if(reporte==0){
          setStyleChart(
            { 
              width: '100%', 
              height: '500px', 
              margin: '50px 0',
              display:''
            }
          );
  
          setStyleChart1(
            { 
              width: '100%', 
              height: '500px', 
              margin: '50px 0',
              display:'none'
            }
          );

          setStyleChart2(
            { 
              width: '100%', 
              height: '500px', 
              margin: '50px 0',
              display:'none'
            }
          );
        }else if(reporte==1){
          setStyleChart(
            { 
              width: '100%', 
              height: '500px', 
              margin: '50px 0',
              display:'none'
            }
          );
  
          setStyleChart1(
            { 
              width: '100%', 
              height: '500px', 
              margin: '50px 0',
              display:''
            });

            setStyleChart2(
              { 
                width: '100%', 
                height: '500px', 
                margin: '50px 0',
                display:'none'
              }
            );
        }else if(reporte==2){
          setStyleChart(
            { 
              width: '100%', 
              height: '500px', 
              margin: '50px 0',
              display:'none'
            }
          );
  
          setStyleChart1(
            { 
              width: '100%', 
              height: '500px', 
              margin: '50px 0',
              display:'none'
            });

            setStyleChart2(
              { 
                width: '100%', 
                height: '500px', 
                margin: '50px 0',
                display:''
              }
            );
        }
        

      }
    }, [activeList]);

    const Usuario=JSON.parse(localStorage.getItem('userSession'));
    

    useEffect(() => {
        if (showMessage) {
            toast[`${alertMessage.type}`](alertMessage.text);
            setTimeout(() => {
                dispatch(hideMessageDashboard());
            }, 100);
        }
    }, [showMessage]);

    useEffect(()=>{
        setLocalList(clientNotifications);
      },[clientNotifications]);

    useEffect(() => {
      if(Usuario.usuario.fk_rol!==6 && Usuario.usuario.fk_rol!==3 && Usuario.usuario.fk_rol!==4 && clientNotifications.length===0){
        dispatch(getDashboardClientesSinRepresentanteLegalDocumentacion());  
      }  
    }, []);

    let filteredItems=clientNotifications;
    filteredItems=( filteredItems.length >0 && localList.length>0 ) ? localList.filter(item =>
        (
        String(item.id).toLowerCase().includes(filterText.toLowerCase())
        || item.rut.toLowerCase().includes(filterText.toLowerCase())
        || item.codigo.toLowerCase().includes(filterText.toLowerCase())
        || (item.razonSocial) && item.razonSocial.toLowerCase().includes(filterText.toLowerCase())
        || (item.dteEmail) && item.dteEmail.toLowerCase().includes(filterText.toLowerCase())
        )):localList;

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
          if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
          }
        };

        return <div className={Col6M0}>
        <div className="col-12"><FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} /></div></div>;
    }, [filterText, resetPaginationToggle]);

    const columns = [
        {
            name: <IntlMessages id="label.acciones"/>,
            width: '100px',
            left: true,
            cell: row =>
            {
              return (<div class="row" style={{paddingLeft:'15px'}}>
  
                  <i class={IconEdit2x} title="EDITAR" onClick={()=>{
                    dispatch(showModalEditarClienteDashboard(row))
                    //dispatch(Cli_Get_Cliente(row.id));
                   
                    //dispatch(Cli_Get_Cliente(row.id));
                  }} ></i>
  
                </div>
              );
            }
        },
        {
            name: <IntlMessages id="label.id"/>,
            selector: 'id',
            sortable: true,
            width: '70px',
          },
          {
            name: <IntlMessages id="label.rut"/>,
            selector: 'rut',
            sortable: true,
            width: '120px',
          },
          {
            name: <IntlMessages id="label.nombreCorto"/>,
            selector: 'codigo',
            sortable: true,
            width: '150px',
          },
          {
            name: <IntlMessages id="label.razonSocial"/>,
            selector: 'razonsocial',
            sortable: true,
            width: '200px',
          },
          {
            name: <IntlMessages id="label.dteEmail"/>,
            selector: 'dteemail',
            sortable: true,
            width: '200px',
          },
          {
            name: <IntlMessages id="label.telefono_1"/>,
            selector: 'telefono1',
            sortable: true,
            width: '150px',
          },
          {
            name: <IntlMessages id="label.comercial"/>,
            selector: 'comercial',
            sortable: true,
            width: '200px',
          },   
          {
            name: <IntlMessages id="label.fecha"/>,
            selector: 'creacion',
            sortable: true,
            width: '200px',
          },
    ];

    const OnchangeSelect=(event)=>{
      setReporte(event.target.value);
      if(event.target.value==0){
        setStyleChart(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:''
          }
        );
        setStyleChart1(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );

        setStyleChart2(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );
        dispatch(setLoaderDashboard(true));
        dispatch(getReportePropuestasDashboard({fecha:moment(desde).format('YYYYMM')}));
      }else if(event.target.value==1){
        setStyleChart(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );
        setStyleChart1(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:''
          }
        );

        setStyleChart2(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );
        dispatch(setLoaderDashboard(true));
        dispatch(getReporteClientesCreadosDashboard({fecha:moment(desde).format('YYYYMM')}));
      }else if(event.target.value==2){
        setStyleChart(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );
        setStyleChart1(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:'none'
          }
        );

        setStyleChart2(
          { 
            width: '100%', 
            height: '500px', 
            margin: '50px 0',
            display:''
          }
        );
        dispatch(setLoaderDashboard(true));
        dispatch(getReporteTrackingsCreadosDashboard({fecha:moment(desde).format('YYYYMM')})); 
      }
    }

    const onChangeDate=(event)=>{
      if(event.target.id==="desde"){
        let fecha=moment(event.target.value).format('YYYYMM');
        if(fecha!=='Invalid date'){
          setDesde(moment(event.target.value).format('YYYY-MM'));
          if(reporte==0){
            dispatch(setLoaderDashboard(true));
            dispatch(getReportePropuestasDashboard({fecha:moment(fecha).format('YYYYMM')}));
          }else if(reporte==1){
            dispatch(setLoaderDashboard(true));
            dispatch(getReporteClientesCreadosDashboard({fecha:moment(fecha).format('YYYYMM')}));
          }else if(reporte==2){
            dispatch(setLoaderDashboard(true));
            dispatch(getReporteTrackingsCreadosDashboard({fecha:moment(fecha).format('YYYYMM')}));
          }
          
        }
      }
    }

console.log('rol',Usuario.usuario.fk_rol);
        return (
            <div>
              ajajaja
            </div>
        );
}

export default Dashboard;
