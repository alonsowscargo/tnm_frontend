import React, { useState } from 'react'
import {
    Button,
    Spinner,
    UncontrolledAlert
} from 'reactstrap';

import {
    IconButton,
    Input,
    InputLabel,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    TextField,
    TextareaAutosize

} from '@material-ui/core';


// object ticket
const message = [
    {
        id: 1,
        titulo: 'Lorem Ipsum is simply dummy text',
        estado: 'state-danger',
        mensaje: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum??? simply dummy text of the printing and typesetting industry. Lorem Ipsum???',
        fechaMensaje: '10/11/21',
        fechaResp: '11/11/21',
        horaResp: '10:18',
        respMensaje: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: 2,
        titulo: 'Lorem Ipsum is printing',
        estado: 'state-warning',
        mensaje: 'lorem ipsum 2 ??? simply dummy text of the printing and typesetting industry. Lorem Ipsum??? simply  simply dummy text of the printing and typesetting industry. Lorem Ipsum??? simply  simply dummy text of the printing and typesetting industry. Lorem Ipsum??? simply ',
        fechaMensaje: '9/11/21',
        fechaResp: '10/11/21',
        horaResp: '08:03',
        respMensaje: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: 3,
        titulo: 'printing and typesetting industry',
        estado: 'state-success',
        mensaje: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        fechaMensaje: '8/11/21'
    },
    {
        id: 4,
        titulo: 'printing and typesetting',
        estado: 'state-success',
        mensaje: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        fechaMensaje: '8/11/21'
    }
]

const FormTicket = ({ closeMensaje, openMensaje, alertMessage, setAlertMessage, newmessage, setNewMessage }) => {

    const [tarea, setTarea] = useState('')
    const [tareas, setTareas] = useState([])

    // State enviar nuevo ticket
    // const [newmessage, setNewMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingComment, setLoadingComment] = useState(false)
    // const [alertMessage2, setAlertMessage] = useState(false)

    // State viene del Invoce.jsx y PackingList.jsx (enviar nuevo ticket)
    const sendMessage = () => {
        setNewMessage(true)
    }

    // loading button 
    const loadingButton = () => {
        setLoading(true)
        setAlertMessage(true)
        setTimeout(() => {
            setLoading(false)
            setNewMessage(false)
        }, 3000)
    }

    // const loadingComentario = () => {
    //     setLoadingComment(true)
    //     setTimeout(() => {
    //         setLoadingComment(false)
    //     }, 2000)
    // }

    const agregarComentario = e  => {
        e.preventDefault();
        if(!tarea.trim()){
            console.log('elemento vacio')
            return
        }
        
        // console.log(tarea)
        setLoadingComment(true)
        setTimeout(() => {
            setLoadingComment(false)

            setTareas([
                ...tareas,
                {id:1, nombreTarea:tarea }
            ])  

            setTarea('')  
        }, 2000)

        
        
    }


    return (
        <div className={openMensaje ? 'sidebar-right sidebar-right-open px-5' : 'sidebar-right'}>
            {
                openMensaje ?
                    (
                        <>
                            <div className="view-content flex-align-center title-between px-5">
                                <h3 className="title-h3 text-capitalize font-weight-900">Generar ticket</h3>
                                <IconButton
                                    onClick={() => closeMensaje()}
                                    className="icon-small icon-button"
                                >
                                    <i className="zmdi zmdi-close"></i>
                                </IconButton>
                            </div>

                            {
                                newmessage ?
                                    (
                                        <div className="view-content-70 px-5">
                                            <form noValidate autoComplete="off" className="gestion">
                                                <div className="row">
                                                    <div className="col-12 mb-3">
                                                        <InputLabel className="Label_Input_Format">prioridad</InputLabel>
                                                        <Input
                                                            label="input 1"
                                                            variant="filled"
                                                        />
                                                    </div>
                                                    <div className="col-12 mb-3">
                                                        <InputLabel className="Label_Input_Format">título</InputLabel>
                                                        <Input type="textarea" name="text" id="exampleText" />
                                                    </div>
                                                    <div className="col-12">
                                                        <InputLabel className="Label_Input_Format">mensaje</InputLabel>
                                                        <TextField
                                                            multiline
                                                            placeholder="Escribe tu mensaje..."
                                                            className="textarea-message"
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="view-content-70 iframe-excel accordion-new px-5">
                                            <div className="title-icon mb-3 pt-3">
                                                <h5 className="title-h5 font-weight-900 mr-2">Historial Ticket</h5>
                                            </div>

                                            {
                                                // alert de confirmación ticket
                                                alertMessage ?
                                                    (
                                                        <UncontrolledAlert color="success">
                                                            Haz generado un nuevo ticket !
                                                        </UncontrolledAlert>
                                                    ) : null
                                            }


                                            {
                                                message.map(item => (
                                                    <Accordion>
                                                        {/* ticket */}
                                                        <AccordionSummary
                                                            expandIcon={<i className="zmdi zmdi-chevron-down"></i>}
                                                            aria-controls="panel1a-content"
                                                            id={item.id}
                                                            key={item.id}
                                                        >

                                                            <Typography className="title-icon">
                                                                <i class={`zmdi zmdi-alert-circle zmdi-hc-lg mr-2 ${item.estado}`}></i>
                                                            </Typography>
                                                            <Typography sx={{ color: 'text.secondary' }}> {item.titulo}</Typography>
                                                        </AccordionSummary>

                                                        <AccordionDetails className="py-0">
                                                            {/* form de generar comentario */}
                                                            <form onSubmit={agregarComentario}>
                                                                <TextField
                                                                    multiline
                                                                    placeholder="Escribe tu mensaje..."
                                                                    className="textarea-message"
                                                                    style={{ width: '100%' }}
                                                                    onChange={ e => setTarea(e.target.value) }
                                                                    value={ tarea }
                                                                />
                                                                <IconButton
                                                                    // onClick={() => loadingComentario()}
                                                                    aria-label="send"
                                                                    type="submit"
                                                                    className="my-1 button-icon button-gra"
                                                                >
                                                                        {/* <i class="zmdi zmdi-mail-send"></i> */}
                                                                    {
                                                                        loadingComment ? (<Spinner />) : (<i class="zmdi zmdi-mail-send"></i>)
                                                                    }
                                                                </IconButton>
                                                            </form>
                                                        </AccordionDetails>

                                                        {
                                                            tareas.map(object => (
                                                                <>
                                                                <AccordionDetails className="py-0">
                                                                    <Typography className="date-message">
                                                                        30/11/21<span className="slash">/</span>17:23
                                                                    </Typography>
                                                                </AccordionDetails>

                                                                <AccordionDetails>
                                                                    <Typography>
                                                                        {object.nombreTarea}
                                                                    </Typography>
                                                                </AccordionDetails>
                                                                </>
                                                            ))
                                                        }

                                                        <AccordionDetails className="py-0">
                                                            <Typography className="date-message">
                                                                {item.fechaMensaje}<span className="slash">/</span>13:23
                                                            </Typography>
                                                        </AccordionDetails>

                                                        <AccordionDetails>
                                                            <Typography>
                                                                {item.mensaje}
                                                            </Typography>
                                                        </AccordionDetails>
                                                        {/* fin ticket */}

                                                        {
                                                            // State respuesta ticket
                                                            !item.fechaResp ?
                                                                ''
                                                                :
                                                                (
                                                                    <>
                                                                        <AccordionDetails className="py-0">
                                                                            <Typography className="date-message">
                                                                                {item.fechaResp}<span className="slash">/</span>{item.horaResp}
                                                                            </Typography>
                                                                        </AccordionDetails>
                                                                        <AccordionDetails>
                                                                            <Typography>
                                                                                {item.respMensaje}
                                                                            </Typography>
                                                                        </AccordionDetails>
                                                                    </>
                                                                )
                                                        }
                                                    </Accordion>

                                                ))
                                            }
                                        </div>
                                    )
                            }

                            <div className="view-content content-buttons px-5">
                                {
                                    // btns 
                                    newmessage ?
                                        (
                                            <Button
                                                onClick={() => loadingButton()}
                                                className="button button-primary button-100"
                                            >
                                                {
                                                    loading ? (<Spinner />) : 'generar ticket'
                                                }
                                            </Button>
                                        )
                                        :
                                        (
                                            <Button
                                                onClick={() => sendMessage()}
                                                className="button button-primary button-100"
                                            >
                                                nuevo ticket
                                            </Button>
                                        )
                                }
                            </div>
                        </>
                    ) : null
            }
        </div>
    )
}

export default FormTicket
