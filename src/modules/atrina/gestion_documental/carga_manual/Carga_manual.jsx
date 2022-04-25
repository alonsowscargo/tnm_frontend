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
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';


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

    const [mostrarFormCarga, setMostrarFormCarga] = useState(0)
    const [mostarbtn, setMostarbtn] = useState(true)
    const [mensajeAlert, setMensajeAlert] = useState(false)

    const addCargaManual = () => {
        setMostrarFormCarga(1)
        setViewTable(true)
        setMostarbtn(false)
    }

    const addCargaMasiva = () => {
        setMostrarFormCarga(2)
        setViewTable(true)
        setMostarbtn(false)
    }

    const removeCargaManual = () => {
        setMostrarFormCarga(0)
        setMostarbtn(true)
        setViewTable(false)
    }

    //
    const [contacts, setContacts] = useState(user)

    const [addFormData, setAddFormData] = useState({
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

        setAddFormData(newFormData)
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

        // setViewTable(true)
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
                mostarbtn ?
                    (
                        <div className="row">
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
                                    Generar Packing List
                                </Button>
                            </div>
                        </div>
                    ) : null
            }


            {
                mostrarFormCarga === 1 ?
                    (
                        <div className="form-add-carga">
                            <div className="title-between mb-4">
                                <h4 className="title-h4 font-weight-900 text-capitalize">
                                    carga manual
                                </h4>

                                <IconButton
                                    onClick={() => removeCargaManual()}
                                    className="icon-small icon-button"
                                >
                                    <i class="zmdi zmdi-close"></i>
                                </IconButton>
                            </div>
                            
                                <form
                                    noValidate autoComplete="off"
                                    className="gestion form-add-masiva"
                                    onSubmit={handleAddFormSubmit}
                                >

                                    <FormGroup className="m">
                                        {/* <InputLabel className="Label_Input_Format">código arancelario</InputLabel> */}
                                        <Input
                                            className="my-0 border-left border-right-none"
                                            name="codigoArancelario"
                                            placeholder="Código Arancelario"
                                            onChange={handleAddFormChange}
                                        />
                                    </FormGroup>
                    
                                    <FormGroup className="m">
                                        {/* <InputLabel className="Label_Input_Format">foto producto</InputLabel> */}
                                        <Input
                                            className="my-0 border-right-none"
                                            name="fotoProducto"
                                            placeholder="Foto Producto"
                                            onChange={handleAddFormChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        {/* <InputLabel className="Label_Input_Format">código</InputLabel> */}
                                        <Input
                                            className="my-0 border-right-none"
                                            name="codigo"
                                            placeholder="Código"
                                            onChange={handleAddFormChange}
                                        />
                                    </FormGroup>
                                    <FormGroup className="m">
                                        {/* <InputLabel className="Label_Input_Format">descripcion China</InputLabel> */}
                                        <Input
                                            className="my-0 border-right-none"
                                            name="descripcionChina"
                                            placeholder="Descripcion China"
                                            onChange={handleAddFormChange}
                                        />
                                    </FormGroup>
                                    <FormGroup className="m">
                                        {/* <InputLabel className="Label_Input_Format">descripcion Ingles</InputLabel> */}
                                        <Input
                                            className="my-0 border-right-none"
                                            name="descripcionIngles"
                                            placeholder="Descripcion Ingles"
                                            onChange={handleAddFormChange}
                                        />
                                    </FormGroup>
                                    <FormGroup className="m">
                                        {/* <InputLabel className="Label_Input_Format">cantidad</InputLabel> */}
                                        <Input
                                            className="my-0 border-right-none"
                                            name="cantidad"
                                            placeholder="Cantidad"
                                            onChange={handleAddFormChange}
                                        />
                                    </FormGroup>
                                    <FormGroup className="m">
                                        {/* <InputLabel className="Label_Input_Format">precio unitario</InputLabel> */}
                                        <Input
                                            className="my-0 border-right-none"
                                            name="precioUnitario"
                                            placeholder="Precio Unitario"
                                            onChange={handleAddFormChange}
                                        />
                                    </FormGroup>
                                    <FormGroup className="m">
                                        {/* <InputLabel className="Label_Input_Format">tipo unidades</InputLabel> */}
                                        <Input
                                            className="my-0 border-right-none"
                                            name="tipoUnidades"
                                            placeholder="Tipo Unidades"
                                            onChange={handleAddFormChange}
                                        />
                                    </FormGroup>

                                    <Button
                                        className="button button-danger button-height px-4"
                                    >
                                        <i class="zmdi zmdi-plus"></i>
                                    </Button>
                                </form>
                        </div>
                    )
                    :
                    null
            }

            {
                mostrarFormCarga === 2 ?
                    (
                        <div className="form-add-carga">
                            <div className="title-between mb-4">
                                <h4 className="title-h4 font-weight-900 text-capitalize">
                                    Carga masiva
                                </h4>

                                <IconButton
                                    onClick={() => removeCargaManual()}
                                    className="icon-small icon-button"
                                >
                                    <i class="zmdi zmdi-close"></i>
                                </IconButton>
                            </div>

                            <div className="px-3">
                                <form>
                                    <div className="row">
                                        <div className="col-12 d-flex  hol justify-content-center">
                                            <FormGroup className="">
                                                <Input
                                                    className="my-0 input-file"
                                                    type="file"
                                                />
                                            </FormGroup>
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
                viewTable ?
                    (
                        <div className="prueba">
                            <form onSubmit={handleEditFormSubmit} className="my-5">
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
                                                                        key={contact.id}
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
                                                                        <TableCell className="icon">
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
                                                                        </TableCell>
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

                            <div className="row">
                                {
                                    mostrarFormCarga === 2 ?
                                    (

                                    <div className="col-3 offset-6">
                                        <Button
                                            className="button button-success button-100"
                                            // onClick={() => packingList()}
                                        >
                                            Descargar Excel
                                        </Button>
                                    </div>

                                    )
                                    :
                                    null
                                }

                                <div className={ mostrarFormCarga === 2 ? 'col-3' : 'col-3 offset-9'}>
                                    <Button
                                        className="button button-primary button-100"
                                        onClick={() => packingList()}
                                    >
                                        Generar Packing List
                                    </Button>
                                </div>
                            </div>
                        </div>

                    )
                    :
                    null
            }
        </Fragment>
    )
}

export default Carga_manual
