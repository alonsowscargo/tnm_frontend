import React from 'react'
import { Button } from 'reactstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <>


            {/* <tr>
                <td>
                    <input
                        type="text"
                        name="codigoArancelario"
                        value={editFormData.codigoArancelario}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="fotoProducto"
                        value={editFormData.fotoProducto}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="codigo"
                        value={editFormData.codigo}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="descripcionChina"
                        value={editFormData.descripcionChina}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="descripcionIngles"
                        placeholder="agregar email"
                        value={editFormData.descripcionIngles}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="cantidad"
                        value={editFormData.cantidad}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="precioUnitario"
                        value={editFormData.precioUnitario}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="tipoUnidades"
                        value={editFormData.tipoUnidades}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <Button
                        type="submit"
                        className="button button-danger"
                    >
                        save
                    </Button>
                    <Button
                        type="submit"
                        className="button button-primary"
                        onClick={handleCancelClick}
                    >
                        save
                    </Button>
                </td>
            </tr> */}
            <TableRow
                // key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    <input
                        type="text"
                        name="codigoArancelario"
                        value={editFormData.codigoArancelario}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell align="left">
                    <input
                        type="text"
                        name="fotoProducto"
                        value={editFormData.fotoProducto}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell align="left">
                    <input
                        type="text"
                        name="codigo"
                        value={editFormData.codigo}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell align="left">
                    <input
                        type="text"
                        name="descripcionChina"
                        value={editFormData.descripcionChina}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell align="left">
                    <input
                        type="text"
                        name="descripcionIngles"
                        placeholder="agregar email"
                        value={editFormData.descripcionIngles}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell align="left">
                    <input
                        type="text"
                        name="cantidad"
                        value={editFormData.cantidad}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell align="left">
                    <input
                        type="text"
                        name="precioUnitario"
                        value={editFormData.precioUnitario}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell align="left">
                    <input
                        type="text"
                        name="tipoUnidades"
                        value={editFormData.tipoUnidades}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <div className="icon icon2">
                    <Tooltip title="ditar">
                        <IconButton  type="submit" className="icon-small mx-1"
                        >
                            <i class="zmdi zmdi-bookmark"></i>
                        </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="eliminar">
                        <IconButton className="icon-small mx-1"
                           onClick={handleCancelClick}
                        >
                            salir
                        </IconButton>
                    </Tooltip> */}
                </div>
            </TableRow>
        </>
    )
}

export default EditableRow
