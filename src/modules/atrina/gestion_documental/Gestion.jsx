import React, { useState } from 'react';
import Header from './header/Header'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { Button } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, ButtonDropdown } from "reactstrap";

// import DeleteIcon from '@material-ui/core/icons-material/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Invoce from './invoce/Invoce';



// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

function createData(id,nameCliente, proveedor, filePackingList, fileInvoce,status, statusIcon) {
    return { id,nameCliente, proveedor, filePackingList, fileInvoce,status, statusIcon};
}

const rows = [
    createData(1,"Frozen yoghurt", 'PROVEEDOR1','zmdi-file','zmdi-file', 'aprobado','icon-succses'),
    createData(2,"Ice cream sandwich",'PROVEEDOR1','zmdi-file','zmdi-file','por confirmar','con-danger'),
    createData(3,"Eclair",'PROVEEDOR1','zmdi-file','zmdi-file','aprobado','icon-succses'),
    createData(4,"Cupcake",'PROVEEDOR1','zmdi-file','zmdi-file','rechazado','con-danger'),
    createData(5,"Gingerbread", 'PROVEEDOR1','zmdi-file','zmdi-file','por confirmar','icon-warning'),
    createData(6,"alonso", 'PROVEEDOR1','zmdi-file','zmdi-file','por confirmar','icon-warning')
];


{/* <i class="zmdi zmdi-file"></i> */}



// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
//     hola: string,
//   ) {
//     return { name, calories, fat, carbs, protein, hola };
//   }

//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0,'hola'),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3,'hola'),
//     createData('Eclair', 262, 16.0, 24, 6.0,'hola'),
//     createData('Cupcake', 305, 3.7, 67, 4.3,'hola'),
//     createData('Gingerbread', 356, 16.0, 49, 3.9,'hola'),
//   ];

const estapasDocumento = [
    { id: '1', title: 'en espera' },
    { id: '2', title: 'por confirmación' },
    { id: '3', title: 'aprobado' },
    { id: '4', title: 'rechazado' }
]



const Recepcion = () => {
    const [modoCambio, setModoCambio] = useState(false);
    const [modocol, setModoCol] = useState(false);

    const hola = () => {
        setModoCambio(true);
    };

    const handleback = () => {
        setModoCambio(false);
    };

    // dropdown estados tabla principal
    const [dropdownSeguimiento, setSeguimientoOpen] = useState(false);
    const openSeguimiento = () => setSeguimientoOpen(!dropdownSeguimiento);

    // const col = () => {
    //     setModoCol(true)
    // }

    return (
        <>
            {
                modoCambio ?
                    (
                        <Invoce handleback={handleback} />
                    )
                    :
                    (
                        <>
                            <Header
                                titulo1='Gestión documental'
                            />

                            <div className="container mt-5">
                                <div className="title-Dropdown title-between">
                                    <ButtonDropdown isOpen={dropdownSeguimiento} toggle={openSeguimiento}>
                                        <DropdownToggle caret>
                                            Estado de documento
                                        </DropdownToggle>

                                        <DropdownMenu right>
                                            {
                                                estapasDocumento.map(item => (
                                                    <DropdownItem key={item.id}>{item.title}</DropdownItem>
                                                ))
                                            }
                                        </DropdownMenu>
                                    </ButtonDropdown>

                                    {/* <FormGroup className="input-search">
                                        <Input
                                            type="search"
                                            name="search"
                                            id="exampleSearch"
                                        />
                                        <i className="zmdi zmdi-search font-weight-900 left"></i>
                                    </FormGroup> */}
                                </div>

                                <TableContainer component={Paper}>
                                    <Table
                                        lg={{
                                            minWidth: 650,
                                            "& .MuiTableRow-root:hover": {
                                                backgroundColor: "red"
                                            }
                                        }}
                                        className="uc"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Id</TableCell>
                                                <TableCell>Cliente</TableCell>
                                                <TableCell>Proveedor</TableCell>
                                                <TableCell>Invoce</TableCell>
                                                <TableCell>Packing list</TableCell>
                                                <TableCell>Estado</TableCell>
                                                
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                >
                                                    {/* <TableCell component="th" scope="row">{row.name}</TableCell> */}
                                                    <TableCell >{row.id}</TableCell>
                                                    <TableCell >{row.nameCliente}</TableCell>
                                                    <TableCell>{row.proveedor}</TableCell>
                                                    <TableCell>
                                                        {/* Descargar Packing List */}
                                                        <Tooltip title="Descargar">
                                                            <IconButton className="icon-small">
                                                                <i className={`zmdi ${row.filePackingList}`}></i>
                                                            </IconButton>
                                                        </Tooltip>

                                                        <Tooltip title="Descargar">
                                                            <IconButton className="icon-small">
                                                                <i className={`zmdi ${row.filePackingList}`}></i>
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        {/* Descargar Packing List */}
                                                        <Tooltip title="Descargar">
                                                            <IconButton className="icon-small">
                                                                <i className={`zmdi ${row.fileInvoce}`}></i>
                                                            </IconButton>
                                                        </Tooltip>

                                                        <Tooltip title="Descargar">
                                                            <IconButton className="icon-small">
                                                                <i className={`zmdi ${row.fileInvoce}`}></i>
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={`cards-icon icon-xs ${row.statusIcon}`}></div> 
                                                        {/* {row.status} */}
                                                    </TableCell>
                                                    <TableCell className="icon">
                                                        <Tooltip title="Ver Archivo">
                                                            <IconButton className="icon-small"
                                                                onClick={() => hola()}
                                                            >
                                                                <i class="zmdi zmdi-open-in-new"></i>
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default Recepcion
