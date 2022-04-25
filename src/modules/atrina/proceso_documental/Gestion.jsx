import React, { useState } from 'react';
import Header from './header/Header'
import Invoce from './documentos/Invoce'

import {
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    ButtonDropdown
} from "reactstrap";

// import IconButton from '@material-ui/coreIconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/core/MoreVert';

import {
    Avatar,
    Tooltip,
    IconButton,
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Divider,
    ListItemText,
    Table,
    makeStyles
} from '@material-ui/core';

const options = [
    'Default',
    'Aprobado',
    'Pendiente',
    'Incompleto'
];

const useStyles = makeStyles({
    action: {
        marginBottom: '8px',
        '& .MuiMenuItem-root': {
            width: "auto",
            overflow: "hidden",
            fontSize: "14px !important"
        }
    },

});


// datos table principal
function createData(id, nameCliente, proveedor, filePackingList, fileInvoce, status, statusIcon, statusTicket, dateTicket) {
    return { id, nameCliente, proveedor, filePackingList, fileInvoce, status, statusIcon, statusTicket, dateTicket };
}

// object table principal
const rows = [
    createData(1367, "JONATHAN ISRAEL BENJAMIN CORAY VASQUEZ", 'Shenzhen Floveme Technology Co.,LTD.', 'zmdi-file', 'zmdi-file', 'aprobado', 'icon-succses', '', ''),
    createData(3614, "COMERCIALIZADORA BUSTAMANTE FORERO Y SUAREZ LIMITADA", 'Shanghai Holley', 'zmdi-file', 'zmdi-file', 'pendiente', 'icon-danger', 'Pendiente', '17/11'),
    createData(6741, "INVERSIONES Y SERVICIOS BOARON ALVARADO SPA", 'Shanghai Holley Shenzhen', 'zmdi-file', 'zmdi-file', 'pendiente', 'icon-danger', 'Resuelto', '14/11'),
    createData(5678, "ADMINISTRACIÓN Y CENTRAL DE ARRIENDO LAS TACAS LTDA", 'Shanghai Holley Shenzhen Floveme', 'zmdi-file', 'zmdi-file', 'incompleto', 'icon-warning', '', ''),
    createData(4654, "LEONEL ETCHEVERRY ORTIZ", 'Shenzhen Floveme Technology Co.,LTD', 'zmdi-file', 'zmdi-file', 'pendiente', 'icon-danger', 'Pendiente', '18/11'),
    createData(5090, "LEANDRO ANTONIO BURGOS NAVARRETE", 'Shanghai Holley', 'zmdi-file', 'zmdi-file', 'pendiente', 'icon-default', '', '')
];

// object estado dropdown titulo de la tabla
const estapasDocumento = [
    { id: '1', title: 'Aprobado' },
    { id: '2', title: 'Pendiente' },
    { id: '3', title: 'Incompleto' },
    { id: '4', title: 'Default' }
]

// const ITEM_HEIGHT = 48;


const Gestion = () => {
    const classes = useStyles();
    const [changeView, setChangeView] = useState(false);

    const nextInvoce = () => {
        setChangeView(true);
    };

    const handleback = () => {
        setChangeView(false);
    };

    // dropdown estados tabla principal
    const [dropdownSeguimiento, setSeguimientoOpen] = useState(false);
    const openSeguimiento = () => setSeguimientoOpen(!dropdownSeguimiento);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {
                changeView ?
                    (
                        <Invoce handleback={handleback} />
                    )
                    :
                    (
                        <>
                            <Header />

                            <div className="container-fuid paddingContainer">
                                <div className={classes.action}>
                                    <IconButton className="icon-large"
                                    >
                                        <i className="zmdi zmdi-search"></i>
                                    </IconButton>

                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls="long-menu"
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        className="icon-large"
                                        onClick={handleClick}
                                    >
                                        <i className="zmdi zmdi-more-vert"></i>
                                    </IconButton>

                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        className="mt-5"
                                    >

                                        <MenuItem>
                                            <ListItemText
                                                onClick={handleClose}
                                            >
                                                Ordenar por
                                            </ListItemText>
                                        </MenuItem>
                                        <Divider />


                                        {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>

                                </div>

                                <TableContainer component={Paper}>
                                    <Table
                                        lg={{
                                            minWidth: 650,
                                            "& .MuiTableRow-root:hover": {
                                                backgroundColor: "red"
                                            }
                                        }}
                                        className="new-table"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Id</TableCell>
                                                <TableCell>Cliente</TableCell>
                                                <TableCell>Proveedor</TableCell>
                                                <TableCell>Invoce</TableCell>
                                                <TableCell>P.L.</TableCell>
                                                <TableCell>Estado</TableCell>
                                                <TableCell>Ticket</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    className="lop"
                                                >
                                                    <TableCell>{row.id}</TableCell>
                                                    <TableCell>{row.nameCliente}</TableCell>
                                                    <TableCell>{row.proveedor}</TableCell>
                                                    <TableCell >
                                                        {/* Descargar Packing List */}
                                                        {/* <Stack direction="row" spacing={1}> */}
                                                        {/* <Chip label="Chip Filled" /> */}
                                                        <div className="flex-align-center">
                                                            {/* <Chip size="small" label="Chip Filled" /> */}
                                                            <Avatar className={`mr-2 ${row.statusIcon}`}>
                                                                <i className={`zmdi ${row.filePackingList}`}></i>
                                                            </Avatar>
                                                            <Avatar className={`${row.statusIcon}`}>
                                                                <i className={`zmdi ${row.filePackingList}`}></i>
                                                            </Avatar>

                                                        </div>


                                                        {/* </Stack> */}
                                                        {/* <Tooltip title="Descargar">
                                                            <IconButton className="icon-small">
                                                                <i className={`zmdi ${row.filePackingList}`}></i>
                                                            </IconButton>
                                                        </Tooltip>

                                                        <Tooltip title="Descargar">
                                                            <IconButton className="icon-small">
                                                                <i className={`zmdi ${row.filePackingList}`}></i>
                                                            </IconButton>
                                                        </Tooltip> */}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex-align-center">
                                                            {/* <Chip size="small" label="Chip Filled" /> */}
                                                            <Avatar className={`mr-2 ${row.statusIcon}`}>
                                                                <i className={`zmdi ${row.filePackingList}`}></i>
                                                            </Avatar>
                                                            <Avatar className={`${row.statusIcon}`}>
                                                                <i className={`zmdi ${row.filePackingList}`}></i>
                                                            </Avatar>

                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        {/* <Chip avatar={<Avatar className={`${row.statusIcon}`}></Avatar>} 
                                                            label={row.status}
                                                            variant="outlined"
                                                        /> */}
                                                        {/* <Chip icon={<i class="zmdi zmdi-circle"></i>} label={row.status} variant="outlined" /> */}
                                                        {/* <Avatar>{row.status}</Avatar> */}
                                                        {/* <Chip
                                                            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                                            label="Avatar"
                                                            variant="outlined"
                                                        /> */}
                                                        {/* <Chip size="medium" className={`${row.statusIcon}`} label={row.status} /> */}
                                                        <div className="flex-align-center">
                                                            <div className={`cards-icon icon-xs mr-2 ${row.statusIcon}`}></div>
                                                            {row.status}
                                                        </div>


                                                    </TableCell>
                                                    <TableCell>
                                                        {/* {row.dateTicket} {row.dateTicket} */}
                                                        <div className="flex-align-center">
                                                            {/* <div className={`cards-icon icon-xs mr-2 ${row.statusTicket}`}></div> */}
                                                            {row.statusTicket}
                                                            <div className='ml-1'> {row.dateTicket}</div>

                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="icon">
                                                        <Tooltip title="Ver Archivo">
                                                            <IconButton className="icon-small"
                                                                onClick={() => nextInvoce()}
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

export default Gestion
