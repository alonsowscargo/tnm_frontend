import React, { useState, Fragment } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Button } from 'reactstrap';
import { nanoid } from 'nanoid';
import EditableRow from './EditableRow';

import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { UncontrolledAlert } from 'reactstrap';



const ariaLabel = { 'aria-labelsvadf': 'descriptionsadv' };

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
        border: "3px solid red",
        height: 100
    }

})



// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }



const user = [
    {
        id: 1,
        codigoArancelario: "90k",
        fotoProducto: 'img',
        codigo: "33456#",
        descripcionChina: "lallalalalalal",
        descripcionIngles: "thank you",
        cantidad: 190,
        precioUnitario: 90000,
        tipoUnidades: 'cajas',
    },
    {
        id: 2,
        codigoArancelario: "90klppp",
        fotoProducto: 'img',
        codigo: "33456#",
        descripcionChina: "lall",
        descripcionIngles: "thank you",
        cantidad: 190,
        precioUnitario: 90000,
        tipoUnidades: 'cajas',
    }
]



const Carga_manual = ({ packingList }) => {

    const classes = useStyles()
    const [mostrarFormCarga, setMostrarFormCarga] = useState(0)
    const [mensajeAlert, setMensajeAlert] = useState(false)

    const addCargaManual = () => {
        setMostrarFormCarga(1)
    }

    const addCargaMasiva = () => {
        setMostrarFormCarga(2)
    }

    const removeCargaManual = () => {
        setMostrarFormCarga(0)
    }

    //
    const [contacts, setContacts] = useState(user)

    const [addFormData, setAddFormData,] = useState({
        // fullName: '',
        // address: '',
        // phoneNumber: '',
        // email: '',
        codigoArancelario: '',
        fotoProducto: '',
        codigo: '',
        descripcionChina: '',
        descripcionIngles: '',
        cantidad: '',
        precioUnitario: '',
        tipoUnidades: ''
    })

    const [editFormData, setEditFormData] = useState({
        // fullName: '',
        // address: '',
        // phoneNumber: '',
        // email: ''
        codigoArancelario: '',
        fotoProducto: '',
        codigo: '',
        descripcionChina: '',
        descripcionIngles: '',
        cantidad: '',
        precioUnitario: '',
        tipoUnidades: ''
    })

    const [editContactId, setEditContactId] = useState(null)



    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    }

    const handleEditFormChange = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const [viewTable, setViewTable] = useState(false)

    const handleAddFormSubmit = (e) => {
        e.preventDefault();
        setMensajeAlert(true)
        const newContact = {
            // id: nanoid(),
            // fullName: addFormData.fullName,
            // address: addFormData.address,
            // phoneNumber: addFormData.phoneNumber,
            // email: addFormData.email,
            id: nanoid(),
            codigoArancelario: addFormData.codigoArancelario,
            fotoProducto: addFormData.fotoProducto,
            codigo: addFormData.codigo,
            descripcionChina: addFormData.descripcionChina,
            descripcionIngles: addFormData.descripcionIngles,
            cantidad: addFormData.cantidad,
            precioUnitario: addFormData.precioUnitario,
            tipoUnidades: addFormData.tipoUnidades
        }

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);

        setViewTable(true)
    }


    const mensajeConfirmacion = () => {
        setMensajeAlert(false)
    }

    // mensajeConfirmacion()

    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const editedContact = {
            // id: editContactId,
            // fullName: editFormData.fullName,
            // address: editFormData.address,
            // phoneNumber: editFormData.phoneNumber,
            // email: editFormData.email,
            id: editContactId,
            codigoArancelario: editFormData.codigoArancelario,
            fotoProducto: editFormData.fotoProducto,
            codigo: editFormData.codigo,
            descripcionChina: editFormData.descripcionChina,
            descripcionIngles: editFormData.descripcionIngles,
            cantidad: editFormData.cantidad,
            precioUnitario: editFormData.precioUnitario,
            tipoUnidades: editFormData.tipoUnidades
        }

        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId)
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
    }


    const handleEditClick = (e, contact) => {
        e.preventDefault();
        setEditContactId(contact.id)

        const formValues = {
            // fullName: contact.fullName,
            // address: contact.address,
            // phoneNumber: contact.phoneNumber,
            // email: contact.email,
            codigoArancelario: contact.codigoArancelario,
            fotoProducto: contact.fotoProducto,
            codigo: contact.codigo,
            descripcionChina: contact.descripcionChina,
            descripcionIngles: contact.descripcionIngles,
            cantidad: contact.cantidad,
            precioUnitario: contact.precioUnitario,
            tipoUnidades: contact.tipoUnidades
        }

        setEditFormData(formValues)
    }

    const handleCancelClick = () => {
        setEditContactId(null)
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    };

    return (
        <Fragment>
            {
                mostrarFormCarga === 1 ?
                    (
                        <div className="form-add-carga">
                            <div className="form-content my-3">
                                {
                                    mensajeAlert ?
                                        (
                                            <UncontrolledAlert
                                                onClick={() => mensajeConfirmacion()}
                                                color="success"
                                                fade={true}
                                            >
                                                Carga agregrada correctamente
                                            </UncontrolledAlert>
                                        ) :
                                        (
                                            <div className="title-between mb-4">
                                                <h4 className="title-h4 font-weight-900 text-capitalize">
                                                    agregar carga manual
                                                </h4>

                                                <IconButton
                                                    onClick={() => removeCargaManual()}
                                                    className="icon-small icon-button"
                                                >
                                                    <i class="zmdi zmdi-close"></i>
                                                </IconButton>
                                            </div>
                                        )
                                }
                                <form
                                    noValidate autoComplete="off"
                                    className="gestion"
                                    onSubmit={handleAddFormSubmit}
                                >
                                    <div className="row">
                                        <div className="col-3 mb-2">
                                            <InputLabel className="Label_Input_Format">código arancelario</InputLabel>
                                            <Input
                                                className={classes.field}
                                                label="input 1"
                                                inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="codigoArancelario"
                                                onChange={handleAddFormChange}
                                            />
                                        </div>
                                        <div className="col-3 mb-2">
                                            <InputLabel className="Label_Input_Format">foto producto</InputLabel>
                                            <Input
                                                className={classes.field}
                                                label="input 1"
                                                inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="fotoProducto"
                                                onChange={handleAddFormChange}
                                            />
                                        </div>
                                        <div className="col-3 mb-2">
                                            <InputLabel className="Label_Input_Format">código</InputLabel>
                                            <Input
                                                className={classes.field}
                                                label="input 1"
                                                inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="codigo"
                                                onChange={handleAddFormChange}
                                            />
                                        </div>
                                        <div className="col-3 mb-2">
                                            <InputLabel className="Label_Input_Format">descripcion China</InputLabel>
                                            <Input
                                                className={classes.field}
                                                label="input 1"
                                                inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="descripcionChina"
                                                onChange={handleAddFormChange}
                                            />
                                        </div>
                                        <div className="col-3 mb-2">
                                            <InputLabel className="Label_Input_Format">descripcion Ingles</InputLabel>
                                            <Input
                                                className={classes.field}
                                                label="input 1"
                                                inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="descripcionIngles"
                                                onChange={handleAddFormChange}
                                            />
                                        </div>
                                        <div className="col-3">
                                            <InputLabel className="Label_Input_Format">cantidad</InputLabel>
                                            <Input
                                                className={classes.field}
                                                label="input 1"
                                                inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="cantidad"
                                                onChange={handleAddFormChange}
                                            />
                                        </div>
                                        <div className="col-3">
                                            <InputLabel className="Label_Input_Format">precio unitario</InputLabel>
                                            <Input
                                                className={classes.field}
                                                label="input 1"
                                                inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="precioUnitario"
                                                onChange={handleAddFormChange}
                                            />
                                        </div>
                                        <div className="col-3">
                                            <InputLabel className="Label_Input_Format">tipo unidades</InputLabel>
                                            <Input
                                                className={classes.field}
                                                label="input 1"
                                                inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="tipoUnidades"
                                                onChange={handleAddFormChange}
                                            />
                                        </div>

                                        <div className="col-3">
                                            <Button
                                                className="button button-danger button-100"
                                            >
                                                agregar
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                    :
                    null
            }


            {
                mostrarFormCarga === 2 ?
                    (
                        <div className="form-add-carga">
                            <div className="form-content my-3">
                                {
                                    mensajeAlert ?
                                        (
                                            <UncontrolledAlert
                                                onClick={() => mensajeConfirmacion()}
                                                color="success"
                                                fade={true}
                                            >
                                                documento cargado correctamente
                                            </UncontrolledAlert>
                                        ) :
                                        (
                                            <div className="title-between mb-4">
                                                <h4 className="title-h4 font-weight-900 text-capitalize">
                                                    agregar carga manual
                                                </h4>

                                                <IconButton
                                                    onClick={() => removeCargaManual()}
                                                    className="icon-small icon-button"
                                                >
                                                    <i class="zmdi zmdi-close"></i>
                                                </IconButton>
                                            </div>
                                        )
                                }
                                <form
                                    noValidate autoComplete="off"
                                    className="gestion"
                                    onSubmit={handleAddFormSubmit}
                                >
                                    <div className="row">
                                        <div className="col-8 ho">
                                            <Input
                                                // className={classes.field}
                                                label="input 1"
                                                // inputProps={ariaLabel}
                                                variant="filled"
                                                size="small"
                                                name="tipoUnidades"
                                                // onChange={handleAddFormChange}
                                            />
                                            {/* <InputLabel className="Label_Input_Format">código arancelario</InputLabel> */}
                                        </div>


                                        <div className="col-4 my-2">
                                            <Button
                                                className="button button-danger button-100"
                                            >
                                               Carga docuemnto
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                    :
                    null
            }



            <div className="row mt-5">
                <div className="col-4">
                    <Button
                        className="button button-gray button-100"
                        onClick={() => addCargaManual()}
                    >
                        carga manual
                    </Button>
                </div>

                <div className="col-4">
                    <Button
                        className="button button-danger button-100"
                        onClick={() => addCargaMasiva()}

                    >
                        carga masiva
                    </Button>
                </div>
                <div className="col-4">
                    <Button
                        className="button button-primary button-100"
                        onClick={() => packingList()}
                    >
                        siguiente
                    </Button>
                </div>
            </div>
            {
                viewTable ?
                    (
                        <div className="prueba">
                            <form onSubmit={handleEditFormSubmit} className="mt-3">
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
                                                <TableCell align="left">Código Arancelario</TableCell>
                                                <TableCell align="left">Foto producto</TableCell>
                                                <TableCell align="left">Código</TableCell>
                                                <TableCell align="left">Descripción Chino</TableCell>
                                                <TableCell align="left">Descripción Inglés</TableCell>
                                                <TableCell align="left">Cantidad</TableCell>
                                                <TableCell align="left">Precio Unitario</TableCell>
                                                <TableCell align="left">Tipo de Unidades</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                contacts.map((contact) => (
                                                    <Fragment>
                                                        {
                                                            editContactId === contact.id ?
                                                                (
                                                                    <EditableRow
                                                                        editFormData={editFormData}
                                                                        handleEditFormChange={handleEditFormChange}
                                                                        handleCancelClick={handleCancelClick}

                                                                    />
                                                                )
                                                                :
                                                                (
                                                                    <TableRow
                                                                        // key={row.name}
                                                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                                    >
                                                                        <TableCell component="th" scope="row">{contact.codigoArancelario}</TableCell>
                                                                        <TableCell align="left">{contact.fotoProducto}</TableCell>
                                                                        <TableCell align="left">{contact.codigo}</TableCell>
                                                                        <TableCell align="left">{contact.descripcionChina}</TableCell>
                                                                        <TableCell align="left">{contact.descripcionIngles}</TableCell>
                                                                        <TableCell align="left">{contact.cantidad}</TableCell>
                                                                        <TableCell align="left">{contact.precioUnitario}</TableCell>
                                                                        <TableCell align="left">{contact.tipoUnidades}</TableCell>
                                                                        <div className="icon">
                                                                            <Tooltip title="ditar">
                                                                                <IconButton className="icon-small mx-1"
                                                                                    onClick={(e) => handleEditClick(e, contact)}
                                                                                >
                                                                                    <i class="zmdi zmdi-edit"></i>
                                                                                </IconButton>
                                                                            </Tooltip>
                                                                            <Tooltip title="eliminar">
                                                                                <IconButton className="icon-small mx-1"
                                                                                    onClick={() => handleDeleteClick(contact.id)}
                                                                                >
                                                                                    <i class="zmdi zmdi-delete"></i>
                                                                                </IconButton>
                                                                            </Tooltip>
                                                                        </div>
                                                                    </TableRow>
                                                                )
                                                        }
                                                    </Fragment>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </form>
                        </div>

                    )
                    :
                    null
            }


            {/* {
                viewTable ?
                    (
                        <div className="prueba">
                            <form onSubmit={handleEditFormSubmit} className="mt-3">
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
                                                <TableCell align="left">Código Arancelario</TableCell>
                                                <TableCell align="left">Foto producto</TableCell>
                                                <TableCell align="left">Código</TableCell>
                                                <TableCell align="left">Descripción Chino</TableCell>
                                                <TableCell align="left">Descripción Inglés</TableCell>
                                                <TableCell align="left">Cantidad</TableCell>
                                                <TableCell align="left">Precio Unitario</TableCell>
                                                <TableCell align="left">Tipo de Unidades</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                contacts.map((contact) => (
                                                    <Fragment>
                                                        {
                                                            editContactId === contact.id ?
                                                                (
                                                                    <EditableRow
                                                                        editFormData={editFormData}
                                                                        handleEditFormChange={handleEditFormChange}
                                                                        handleCancelClick={handleCancelClick}

                                                                    />
                                                                )
                                                                :
                                                                (
                                                                    <TableRow
                                                                        // key={row.name}
                                                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                                    >
                                                                        <TableCell component="th" scope="row">{contact.codigoArancelario}</TableCell>
                                                                        <TableCell align="left">{contact.fotoProducto}</TableCell>
                                                                        <TableCell align="left">{contact.codigo}</TableCell>
                                                                        <TableCell align="left">{contact.descripcionChina}</TableCell>
                                                                        <TableCell align="left">{contact.descripcionIngles}</TableCell>
                                                                        <TableCell align="left">{contact.cantidad}</TableCell>
                                                                        <TableCell align="left">{contact.precioUnitario}</TableCell>
                                                                        <TableCell align="left">{contact.tipoUnidades}</TableCell>
                                                                        <div className="icon">
                                                                            <Tooltip title="ditar">
                                                                                <IconButton className="icon-small mx-1"
                                                                                    onClick={(e) => handleEditClick(e, contact)}
                                                                                >
                                                                                    <i class="zmdi zmdi-edit"></i>
                                                                                </IconButton>
                                                                            </Tooltip>
                                                                            <Tooltip title="eliminar">
                                                                                <IconButton className="icon-small mx-1"
                                                                                    onClick={() => handleDeleteClick(contact.id)}
                                                                                >
                                                                                    <i class="zmdi zmdi-delete"></i>
                                                                                </IconButton>
                                                                            </Tooltip>
                                                                        </div>
                                                                    </TableRow>
                                                                )
                                                        }
                                                    </Fragment>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </form>
                        </div>

                    )
                    :
                    null
            } */}
        </Fragment>
    )
}

export default Carga_manual
