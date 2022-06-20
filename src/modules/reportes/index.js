import React, { useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Form from "../../components/form/Form";
import InputAutocomplete from "../../components/form/AutoComplete";
import Field from "../../components/form/Field";
import MaterialTable from "material-table";
import DetailTable from "./componts/DetailTable";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useFormSearch } from "../../hooks/useFormSearch";
import { data } from "./data";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Autocomplete from '@material-ui/lab/Autocomplete';

import {
    BsFileEarmarkArrowDown,
    BsFileEarmarkText,
    BsPencilSquare,
    BsPlus,
    BsTrashFill,
    BsExclamationSquareFill,
    BsCircleFill,
    BsSearch
} from "react-icons/bs";

import Modal from "./componts/Modal";
// import {
//     TextField,
//     InputLabel,
// } from '@material-ui/core';

import {
    //makeStyles,
    Button,
    IconButton,
    MenuItem,
    Menu,
} from "@material-ui/core";

// import MomentUtils from "@date-io/moment";
// import moment from "moment";
// import "moment/locale/es";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
];

const estados = [
    { title: "Pre servicio" },
    { title: "En transito" },
    { title: "Termiando" },
    { title: "Eliminado" },
];

// const useStyles = makeStyles((theme) => ({
// }));

//// serach
const initalForm = {
    referencia: "",
    contenedor: "",
};

const Dashboard = () => {
    // const classes = useStyles();

    // const [selectedRow, setSelectedRow] = useState(null);

    const { form, loading, response, handleChange, handleSubmit } = useFormSearch(
        initalForm
    );

    const [filter, setFilter] = useState(false);

    const handleFilter = () => {
        setFilter(!filter);
    };

    const [results, setResults] = useState(false);

    const handleSearch = () => {
        setResults(true);
    };

    const columns = [
        { title: "Contenedor", field: "contenedor", cellStyle: { width: 100 } },
        { title: "tipo", field: "tipo" },
        { title: "tamaño", field: "tamano" },
        { title: "nave", field: "nave", cellStyle: { width: 300 } },
        { title: "eta", field: "eta" },
        { title: "referencia", field: "referencia", cellStyle: { width: 500 } },
        { title: "servicio", field: "servicio" },
        { title: "estado", field: "estado" },
    ];

    // const title = [
    //     { title1: "nave0p0", },
    //     { title2: "eta", },
    //     { title3: "contenedor", },
    // ]

    const [age, setAge] = React.useState("");

    const handleChangeS = (event) => {
        setAge(event.target.value);
    };

    //////////////
    const [allData, setAllData] = useState(data);
    const [name, setName] = useState("");

    const handleChangeName = (event) => {
        const { value } = event.value;
        setName(value);
        handleFilterName(value);
    };

    const handleFilterName = () => {
        const filteredDate = data.filter((item) => {
            const fullName = `${item.referencia}`;
            if (fullName.toLowerCase().includes(name.toLowerCase())) {
                return item;
            }
        });

        setAllData(filteredDate);
    };

    ///////////////// Dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    ///////////////
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="app-title justify-space-between mb-4">
                <h1 className="font-weight-700 m-0">Historial de servicios</h1>

                <Button
                    variant="outlined"
                    size="medium"
                    color="primary"
                    className="app-button"
                >
                    nuevo historial
                </Button>
            </div>

            <Form onSubmit={handleSubmit}>
                <div className="app-filter">
                    {/* <IconButton
                        aria-label="filtrar"
                        className="app-button-filter mr-4"
                        onClick={handleFilter}
                    >
                        {filter ? <i className="bi bi-x-lg text-danger"></i> : <i className="bi bi-funnel"></i>}
                        {filter ? 'Cerrar Fitros ' : 'Otros Filtros'}
                    </IconButton> */}

                    <div className="app-input">
                        <InputAutocomplete
                            label="Cliente facturación"
                            placeholder="Seleccionar cliente"
                            data={top100Films}
                        />
                    </div>

                    <div className="app-input">
                        <InputAutocomplete
                            label="Cliente despacho"
                            placeholder="Seleccionar despacho"
                            data={top100Films}
                        />
                    </div>

                    <div className="app-input">
                        <Field
                            type="text"
                            label="Referencia"
                            placeholder="Ingresa tu referencia"
                            name="referencia"
                            value={form.referencia}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>

                    <div className="app-input">
                        <Field
                            type="text"
                            label="Nº. Contenedor"
                            placeholder="Ingresa tu contenedor"
                            name="contenedor"
                            value={form.contenedor}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>

                    <div className="app-action">
                        {/* <IconButton
                            aria-label="buscar"
                            //className="app-button ml-4"
                            onClick={handleSearch}
                            type="submit"
                        >
                            <SearchOutlinedIcon />
                        </IconButton> */}

                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className="app-button mr-2"
                            // fullWidth
                            onClick={handleClickMenu}
                        >
                            <BsSearch/>
                        </Button>

                        <Button
                            variant="outlined"
                            size="small"
                            //color="secondary"
                            className="app-button"
                            // fullWidth
                            // onClick={handleClickMenu}
                            onClick={handleFilter}
                        >
                            <i class="bi bi-eraser-fill"></i>
                        </Button>

                        <Button
                            variant="outlined"
                            size="small"
                            //color="secondary"
                            className="app-button"
                            //fullWidth
                            // onClick={handleClickMenu}
                            onClick={handleFilter}
                        >
                            <i class="bi bi-sort-down"></i>
                        </Button>

                        {/* <IconButton
                            aria-label="filtrar"
                            //className=""
                            onClick={handleFilter}
                        >
                            {filter ? <i className="bi bi-x-lg text-danger"></i> : <i className="bi bi-funnel"></i>}
                        </IconButton> */}
                    </div>
                </div>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                >
                    <div className="row">
                        <div className="col-6">
                            <InputAutocomplete
                                label="Cliente facturación"
                                placeholder="Seleccionar cliente"
                                data={top100Films}
                            />
                        </div>

                        <div className="col-6">
                            <InputAutocomplete
                                label="Cliente despacho"
                                placeholder="Seleccionar despacho"
                                data={top100Films}
                            />
                        </div>

                        <div className="col-6">
                            <InputAutocomplete
                                label="Estado"
                                placeholder="Seleccionar"
                                data={estados}
                            />
                        </div>

                        <div className="col-6">
                            <InputAutocomplete
                                label="Conductor etapa 1"
                                placeholder="Etapa 1"
                                data={estados}
                            />
                        </div>

                        <div className="col-6">
                            <InputAutocomplete
                                label="Conductor etapa 2"
                                placeholder="Etapa 2"
                                data={estados}
                            />
                        </div>

                        <div className="col-6">
                            <InputAutocomplete
                                label="Conductor etapa 3"
                                placeholder="Etapa 3"
                                data={estados}
                            />
                        </div>
                    </div>
                    {/* <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Logout</MenuItem> */}
                </Menu>

                {filter && (
                    <div className="app-filter app-filter-secundary">
                        <div className="app-input">
                            <InputAutocomplete
                                label="Cliente facturación"
                                placeholder="Seleccionar cliente"
                                data={top100Films}
                            />
                        </div>

                        <div className="app-input">
                            <InputAutocomplete
                                label="Cliente despacho"
                                placeholder="Seleccionar despacho"
                                data={top100Films}
                            />
                        </div>

                        <div className="app-input">
                            <InputAutocomplete
                                label="Estado"
                                placeholder="Seleccionar"
                                data={estados}
                            />
                        </div>

                        <div className="app-input">
                            <InputAutocomplete
                                label="Conductor etapa 1"
                                placeholder="Etapa 1"
                                data={estados}
                            />
                        </div>

                        <div className="app-input">
                            <InputAutocomplete
                                label="Conductor etapa 2"
                                placeholder="Etapa 2"
                                data={estados}
                            />
                        </div>

                        <div className="app-input">
                            <InputAutocomplete
                                label="Conductor etapa 3"
                                placeholder="Etapa 3"
                                data={estados}
                            />
                        </div>
                    </div>
                )}
            </Form>

            <div className="app-table mt-4">
                <div className="app-table-sticky">
                    <MaterialTable
                        title="Servicios"
                        columns={columns}
                        data={data}
                        onRowClick={(event, rowData, togglePanel) => {
                            togglePanel();
                        }}
                        options={{
                            exportButton: false,
                            search: false,
                            paging: false,
                            detailPanelType: "single",
                            maxBodyHeight: "80vh",
                        }}
                        localization={{
                            body: {
                                emptyDataSourceMessage: (
                                    <h6 style={{ textAlign: "center", margin: "0" }}>
                                        No jajaja
                                    </h6>
                                ),
                            },
                        }}
                        detailPanel={[
                            {
                                render: (rowData) => {
                                    return (
                                        <DetailTable
                                            rowData={rowData}
                                            handleClickOpen={handleClickOpen}
                                        />
                                    );
                                },
                            },
                        ]}
                    />
                </div>
            </div>

            <Modal open={open} onClose={handleClose} />
        </>
    );
};

export default Dashboard;
