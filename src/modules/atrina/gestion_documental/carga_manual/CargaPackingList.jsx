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



const CargaPackingList = ({ abrirBox, handleback, buttonBox, abrirDetalleBox, handleValidarDocumento }) => {

    const [mostrarFormCarga, setMostrarFormCarga] = useState(0)
    const [mostarbtn, setMostarbtn] = useState(true)
    const [modoEdicion, setModoEdicion] = useState(false)

    const addCargaManual = () => {
        setMostrarFormCarga(1)
        // setViewTable(true)
        setMostarbtn(false)
    }

    const addCargaMasiva = () => {
        setMostrarFormCarga(2)
        // setViewTable(true)
        setMostarbtn(false)
    }

    const removeCargaManual = () => {
        setMostrarFormCarga(0)
        setMostarbtn(true)
        setModoEdicion(false)
    }

    const handleEdit = contact => {
        setModoEdicion(true)
        setMostrarFormCarga(1)
        setMostarbtn(false)

        setAddFormData(contact.codigoArancelario)
    }

    //
    const [contacts, setContacts] = useState(user)

    const [addFormData, setAddFormData] = useState({
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
        codigoArancelario: '',
        fotoProducto: '',
        codigo: '',
        descripcionChina: '',
        descripcionIngles: '',
        cantidad: '',
        precioUnitario: '',
        tipoUnidades: ''
    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData)
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newContact = {
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
        setAddFormData('')
    }

    return (
        <Fragment>

            {
                mostarbtn ?
                    (
                        <div className="row">
                            <div className="col-3">
                                <Button
                                    className="button button-gray button-100"
                                    onClick={() => addCargaManual()}
                                >
                                    carga manual
                                </Button>
                            </div>

                            <div className="col-3">
                                <Button
                                    className="button button-danger button-100"
                                    onClick={() => addCargaMasiva()}

                                >
                                    carga masiva
                                </Button>
                            </div>

                            {
                                buttonBox ?
                                    (
                                        <>
                                            <div className="col-3">
                                                <Button
                                                    className="button button-redlight button-100"
                                                    onClick={() => abrirDetalleBox()}
                                                >
                                                    Detalle Caja
                                                </Button>
                                            </div>

                                            <div className="col-3">
                                                <Button
                                                    className="button button-primary button-100"
                                                    onClick={() => handleValidarDocumento()}
                                                >
                                                    validar documentos
                                                </Button>
                                            </div>
                                        </>
                                    ) : null
                                    // (
                                    //     <div className="col-3">
                                    //         <Button
                                    //             className="button button-primary button-100"
                                    //             onClick={() => handleback()}
                                    //         >
                                    //             página principal
                                    //         </Button>
                                    //     </div>
                                    // )
                            }
                        </div>
                    ) : null
            }


            {
                mostrarFormCarga === 1 ?
                    (
                        <div className="form-add-carga">
                            <div className="title-between mb-4">
                                <h4 className="title-h4 font-weight-900 text-capitalize">
                                    {
                                        modoEdicion ? 'editar carga' : 'agregar carga'
                                    }
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
                                    <Input
                                        className="my-0 border-left border-right-none"
                                        name="codigoArancelario"
                                        placeholder="Código Arancelario"
                                        onChange={handleAddFormChange}
                                    />
                                </FormGroup>

                                <FormGroup className="m">
                                    <Input
                                        className="my-0 border-right-none"
                                        name="fotoProducto"
                                        placeholder="Foto Producto"
                                        onChange={handleAddFormChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        className="my-0 border-right-none"
                                        name="codigo"
                                        placeholder="Código"
                                        onChange={handleAddFormChange}
                                    />
                                </FormGroup>
                                <FormGroup className="m">
                                    <Input
                                        className="my-0 border-right-none"
                                        name="descripcionChina"
                                        placeholder="Descripcion China"
                                        onChange={handleAddFormChange}
                                    />
                                </FormGroup>
                                <FormGroup className="m">
                                    <Input
                                        className="my-0 border-right-none"
                                        name="descripcionIngles"
                                        placeholder="Descripcion Ingles"
                                        onChange={handleAddFormChange}
                                    />
                                </FormGroup>
                                <FormGroup className="m">
                                    <Input
                                        className="my-0 border-right-none"
                                        name="cantidad"
                                        placeholder="Cantidad"
                                        onChange={handleAddFormChange}
                                    />
                                </FormGroup>
                                <FormGroup className="m">
                                    <Input
                                        className="my-0 border-right-none"
                                        name="precioUnitario"
                                        placeholder="Precio Unitario"
                                        onChange={handleAddFormChange}
                                    />
                                </FormGroup>
                                <FormGroup className="m">
                                    <Input
                                        className="my-0 border-right-none"
                                        name="tipoUnidades"
                                        placeholder="Tipo Unidades"
                                        onChange={handleAddFormChange}
                                    />
                                </FormGroup>
                                <Button
                                    className={modoEdicion ? 'button button-primary button-height px-4' : 'button button-danger button-height px-4'}
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

            <div className="prueba">
                <form className="my-5">
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
                                    {/* <TableCell align="left">Foto producto</TableCell> */}
                                    <TableCell align="left">Código</TableCell>
                                    <TableCell align="left">Descripción Chino</TableCell>
                                    <TableCell align="left">Descripción Inglés</TableCell>
                                    <TableCell align="left">Bultos</TableCell>
                                    {/* <TableCell align="left">Cantidad Bultos</TableCell>
                                    <TableCell align="left">Tipo de Unidades</TableCell>
                                    <TableCell align="left">Peso Neto</TableCell>
                                    <TableCell align="left">Peso bruto</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    contacts.map((contact) => (
                                        <TableRow
                                            key={contact.id}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{contact.codigoArancelario}</TableCell>
                                            {/* <TableCell align="left">{contact.fotoProducto}</TableCell> */}
                                            <TableCell align="left">{contact.codigo}</TableCell>
                                            <TableCell align="left">{contact.descripcionChina}</TableCell>
                                            <TableCell align="left">{contact.descripcionIngles}</TableCell>
                                            <TableCell align="left">{contact.cantidad}</TableCell>
                                            {/* <TableCell align="left">{contact.cantidad}</TableCell>
                                            <TableCell align="left">{contact.precioUnitario}</TableCell>
                                            <TableCell align="left">{contact.tipoUnidades}</TableCell>
                                            <TableCell align="left">{contact.tipoUnidades}</TableCell> */}
                                            <TableCell className="icon">
                                                <Tooltip title="Ver Archivo">
                                                    <IconButton className="icon-small"
                                                        onClick={() => abrirBox()}
                                                    >
                                                        <i class="zmdi zmdi-dropbox"></i>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Editar">
                                                    <IconButton className="icon-small mx-1"
                                                        onClick={() => handleEdit(contact)}
                                                    >
                                                        <i class="zmdi zmdi-edit"></i>
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip title="eliminar">
                                                    <IconButton className="icon-small mx-1"
                                                    >
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </form>
            </div>


            {
                mostrarFormCarga === 1 ?
                    (
                        <div className="row">
                            <div className="col-3 offset-9">
                                <Button
                                    className="button button-primary button-100"
                                    onClick={() => handleValidarDocumento()}
                                >
                                    validar documento
                                </Button>
                            </div>
                        </div>
                    )
                    :
                    null
            }

            {
                mostrarFormCarga === 2 ?
                    (
                        <div className="row">
                            <div className="col-3 offset-6">
                                <Button
                                    className="button button-success button-100"
                                // onClick={() => packingList()}
                                >
                                    Descargar Excel
                                </Button>
                            </div>

                            <div className="col-3">
                                <Button
                                    className="button button-primary button-100"
                                    onClick={() => handleValidarDocumento()}
                                >
                                    Validar docuemnto
                                </Button>
                            </div>
                        </div>
                    )
                    :
                    null
            }
        </Fragment>
    )
}

export default CargaPackingList
