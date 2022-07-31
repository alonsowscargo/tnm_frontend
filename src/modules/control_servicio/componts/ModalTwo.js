import React, { useState, useEffect } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Form from "../../../components/form/Form";
import Field from "../../../components/form/Field";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        // background: "#C8352E",
        //color:'#ffffff',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const initailForm = {
    id: null,
    client_dispatch: "",
    container: "",
    type: "",
    size: "",
    ship: "",
    eta: "",
    reference: "",
    service: "",
    free_days: "",
    deadline_date: "",
    number_reservation: "",
    kg: "",
};

const ModalTwo = ({
    open,
    onClose,
    createData,
    updateData,
    dataToEdit,
    setDataToEdit,
    editDay,
    setEditDay,
    createData2,
    prueba,
}) => {
    const [form, setForm] = useState(initailForm);
    //console.log(prueba)

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initailForm);
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (!form.name || !form.constellation) {
        //     alert("Datos incompletos");
        //     return;
        // }
        if (!form.container) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
            // createData2(form);
            alert("haz registrados  nuevos datos");
        } else {
            updateData(form);
            alert("actulizaste tu datos");
        }

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initailForm);
        setDataToEdit(null);
        onClose();
        setEditDay(false);
    };

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    return (
        <Dialog
            open={open}
            onClose={handleReset}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth={editDay ? "sm" : "md"}
        >
            <DialogTitle
                id="customized-dialog-title"
                onClose={handleReset}
                className="px-5 pt-5"
            >
                {dataToEdit ? "Editar Control servicio" : "Ingresar control servicio"}
            </DialogTitle>

            <DialogContent className="px-5">
                <Form onSubmit={handleSubmit}>
                    {editDay ? (
                        <>
                            <div className="row">
                                <div className="col-8 align-item-center pr-0">
                                    <h3 className="text font-weight-400">
                                        Estimado, ingresar la cantidad días libres
                                    </h3>
                                </div>

                                <div className="col-4 pl-0 input-day-fre">
                                    <Field
                                        // label="días libres"
                                        type="number"
                                        //placeholder="Días libres"
                                        name="free_days"
                                        onChange={handleChange}
                                        value={form.free_days}
                                        //fullWidth
                                    />
                                </div>

                                {/* <div className="col-2 pl-1">
                                    <Button
                                        variant="outlined"
                                        size="medium"
                                        // startIcon={<BsFileEarmarkText />}
                                        color="secondary"
                                        className="app-button"
                                        type="submit"
                                        fullWidth
                                    >
                                        Enviar
                                    </Button>
                                </div> */}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <h3 className="text font-weight-600 text-dange pl-3">
                                        Servicio
                                    </h3>
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="contenedor"
                                        type="text"
                                        placeholder="conte"
                                        name="container"
                                        onChange={handleChange}
                                        value={form.container}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="tipo"
                                        type="text"
                                        placeholder="Tipo"
                                        name="type"
                                        onChange={handleChange}
                                        value={form.type}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Tamaño"
                                        type="number"
                                        placeholder="Tamaño"
                                        name="size"
                                        onChange={handleChange}
                                        value={form.size}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Nave"
                                        type="text"
                                        placeholder="Nave"
                                        name="ship"
                                        onChange={handleChange}
                                        value={form.ship}
                                        fullWidth
                                    />
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-3">
                                    <Field
                                        label="eta"
                                        type="text"
                                        placeholder="Ingresa Ets"
                                        name="eta"
                                        onChange={handleChange}
                                        value={form.eta}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Referencia"
                                        type="text"
                                        placeholder="Referencia"
                                        name="reference"
                                        onChange={handleChange}
                                        value={form.reference}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Servicio"
                                        type="text"
                                        placeholder="Servicio"
                                        name="service"
                                        onChange={handleChange}
                                        value={form.service}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Nº Reserva"
                                        type="text"
                                        placeholder="Nº Reserva"
                                        name="number_reservation"
                                        onChange={handleChange}
                                        value={form.number_reservation}
                                        fullWidth
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <Field
                                        label="peso"
                                        type="number"
                                        placeholder="peso"
                                        name="kg"
                                        onChange={handleChange}
                                        value={form.kg}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Cliente despacho"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>
                            </div>

                            <div className="tabs-list">
                                <div className="border mt-5 mb-3"></div>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color={index === 0 ? 'primary' : 'default'}
                                    onClick={() => setIndex(0)}
                                >
                                    Retiro full / vacio
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    color={index === 1 ? 'primary' : 'default'}
                                    className="mx-2"
                                    onClick={() => setIndex(1)}
                                >
                                    Presentación cliente
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    color={index === 2 ? 'primary' : 'default'}
                                    onClick={() => setIndex(2)}
                                >
                                    Devolución / Stacking
                                </Button>
                                <div className="border mb-4 mt-3"></div>
                            </div>

                            <div className="row pb-2" hidden={index != 0}>
                                <div className="col-12 mb-2">
                                    <h3 className="text font-weight-600 text-dange pl-3">
                                        Retiro full / vacio
                                    </h3>
                                </div>
                                <div className="col-3">
                                    <Field
                                        label="Retiro"
                                        type="number"
                                        placeholder="peso"
                                        name="kg"
                                        onChange={handleChange}
                                        value={form.kg}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Conductor"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-2">
                                    <Field
                                        label="Fecha"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-2">
                                    <Field
                                        label="Hora"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>
                                <div className="col-2">
                                    <Field
                                        label="Almacenaje"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>
                            </div>


                            <div className="row pb-2" hidden={index != 1}>
                                <div className="col-12 mb-2">
                                    <h3 className="text font-weight-600 text-dange pl-3">
                                        Presentación cliente{" "}
                                    </h3>
                                </div>
                                <div className="col-3">
                                    <Field
                                        label="Retiro"
                                        type="number"
                                        placeholder="peso"
                                        name="kg"
                                        onChange={handleChange}
                                        value={form.kg}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Conductor"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-2">
                                    <Field
                                        label="Fecha"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-2">
                                    <Field
                                        label="Hora"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>
                                <div className="col-2">
                                    <Field
                                        label="Guia"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>
                            </div>


                            <div className="row pb-2" hidden={index != 2}>
                                <div className="col-12 mb-2">
                                    <h3 className="text font-weight-600 text-dange pl-3">
                                        Devolución / Stacking
                                    </h3>
                                </div>
                                <div className="col-3">
                                    <Field
                                        label="Retiro"
                                        type="number"
                                        placeholder="peso"
                                        name="kg"
                                        onChange={handleChange}
                                        value={form.kg}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-3">
                                    <Field
                                        label="Conductor"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-2">
                                    <Field
                                        label="Fecha"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>

                                <div className="col-2">
                                    <Field
                                        label="Hora"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>
                                <div className="col-2">
                                    <Field
                                        label="Eir"
                                        type="text"
                                        placeholder="Cliente despacho"
                                        name="client_dispatch"
                                        onChange={handleChange}
                                        value={form.client_dispatch}
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {editDay && (
                    <>
                        {/* <h1>{prueba.free_days}</h1> */}
                        {/* <div className="border mt-5 mb-3"></div> */}
                        <h3 className="text font-weight-600 mt-4 mb-3">
                            Historial de cambios
                        </h3>

                        <div className="app-history-day mb-2">
                            <div className="app-detail-item app-background">
                                <div className="app-item-40">
                                    <h4 className="text-xs font-weight-500">Responsable</h4>
                                </div>

                                <div className="app-item-20">
                                    <h4 className="text-xs font-weight-500">Fecha</h4>
                                </div>

                                <div className="app-item-20">
                                    <h4 className="text-xs font-weight-500">Hora</h4>
                                </div>

                                <div className="app-item-20">
                                    <h4 className="text-xs font-weight-500">Día</h4>
                                </div>
                            </div>

                            <div className="app-detail-item app-border">
                                <div className="app-item-40">
                                    <h4 className="text-xs font-weight-300">kkak</h4>
                                </div>

                                <div className="app-item-20">
                                    <h4 className="text-xs font-weight-300">22/11/2222</h4>
                                </div>

                                <div className="app-item-20">
                                    <h4 className="text-xs font-weight-300">13:45</h4>
                                </div>

                                <div className="app-item-20">
                                    <h4 className="text-xs font-weight-300">{form.free_days}</h4>
                                </div>
                            </div>
                        </div>

                    </>
                )}

                    <div className="justify-end mt-4 mb-5">
                        <Button
                            variant="outlined"
                            size="large"
                            // startIcon={<BsFileEarmarkText />}
                            // color="secondary"
                            className="mr-2"
                            onClick={handleReset}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            // startIcon={<BsFileEarmarkText />}
                            color="secondary"
                            // className="mr-2"
                            type="submit"
                        >
                            registrar
                        </Button>
                    </div>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default ModalTwo;
