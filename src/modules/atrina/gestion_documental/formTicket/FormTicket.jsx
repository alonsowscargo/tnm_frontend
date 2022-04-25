import React, {useState} from 'react'
import { Button } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Badge from '@material-ui/core/Badge';
import { Spinner } from 'reactstrap'
// import TextField from '@material-ui/core/TextField';


function notificationsLabel(count) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}

const FormTicket = ({ closeMensaje, openMensaje }) => {
    // State loading btn 
    const [loading, setLoading] = useState(false)
    const loadingButton = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    return (
        <div className={openMensaje ? 'sidebar-right sidebar-right-open view-scroll-y' : 'sidebar-right'}>
            {
                openMensaje ?
                    (
                        <>
                            <IconButton
                                onClick={() => closeMensaje()}
                                className="icon-small icon-button"
                            >
                                <i class="zmdi zmdi-close"></i>
                            </IconButton>

                            <div className="sidebar-right-content">
                                <h3 className="title-h3 text-capitalize mb-3 font-weight-900">Generar ticket</h3>
                                <form noValidate autoComplete="off" className="gestion">
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <InputLabel className="Label_Input_Format">Tipo estado</InputLabel>
                                            <Input
                                                label="input 1"
                                                variant="filled"
                                                size="small"
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <InputLabel className="Label_Input_Format">mensaje</InputLabel>
                                            <Input type="textarea" name="text" id="exampleText" rows={5} />
                                        </div>
                                        {/* <div className="col-12">
                                            <Button className="button button-primary button-100">
                                                Enviar
                                            </Button>
                                        </div> */}
                                    </div>
                                </form>

                                <div className="title-icon mb-3 pt-3">
                                    <h5 className="title-h5 font-weight-900 mr-2">Comentarios</h5>

                                    <IconButton
                                        className="icon-medium"
                                        aria-label={notificationsLabel(4)}
                                    >
                                        <Badge badgeContent={4} color="secondary">
                                            <i class="zmdi zmdi-dropbox"></i>
                                        </Badge>
                                    </IconButton>
                                </div>
                            </div>

                            {/* <form noValidate autoComplete="off" className="gestion">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <InputLabel className="Label_Input_Format">urgencia</InputLabel>
                                        <Input
                                            label="input 1"
                                            variant="filled"
                                            size="small"
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <InputLabel className="Label_Input_Format">mensaje</InputLabel>
                                        <Input type="textarea" name="text" id="exampleText"  rows={5} />
                                    </div>
                                    <div className="col-12">
                                        <Button className="button button-primary button-100">
                                            Enviar
                                        </Button>
                                    </div>
                                </div>
                            </form> */}

                            <div className="div-scroll div-scroll-mensaje">
                                {/* pregunta 1 */}
                                <div className="sidebar-content">
                                    <div className="sidebar-pregunta">
                                        <div className="title-between mb-2">
                                            <div className="title-icon ">
                                                <div className="cards-icon icon-xs icon-danger mr-2"></div>
                                                <p className="text text-capitalize font-weight-500">urgente</p>
                                            </div>

                                            <p className="text-small text-capitalize font-weight-300">12/11/2021<span className="slash">/</span>13:23</p>
                                        </div>

                                        <p className="text-small font-weight-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>

                                    <div className="sidebar-respuesta mt-2">
                                        <p className="text-small font-weight-300 pl-3"><strong>Respuesta</strong><span className="slash">/</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                </div>

                                {/* pregunta 2 */}
                                <div className="sidebar-content">
                                    <div className="sidebar-pregunta">
                                        <div className="title-between mb-2">
                                            <div className="title-icon ">
                                                <div className="cards-icon icon-xs icon-warning mr-2"></div>
                                                <p className="text text-capitalize font-weight-500">importante</p>
                                            </div>

                                            <p className="text-small text-capitalize font-weight-300">12/11/2021<span className="slash">/</span>13:23</p>
                                        </div>

                                        <p className="text-small font-weight-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>
                                </div>

                                {/* pregunta 2 */}
                                <div className="sidebar-content">
                                    <div className="sidebar-pregunta">
                                        <div className="title-between mb-2">
                                            <div className="title-icon ">
                                                <div className="cards-icon icon-xs icon-warning mr-2"></div>
                                                <p className="text text-capitalize font-weight-500">importante</p>
                                            </div>

                                            <p className="text-small text-capitalize font-weight-300">12/11/2021<span className="slash">/</span>13:23</p>
                                        </div>

                                        <p className="text-small font-weight-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>
                                </div>

                                {/* pregunta 2 */}
                                <div className="sidebar-content">
                                    <div className="sidebar-pregunta">
                                        <div className="title-between mb-2">
                                            <div className="title-icon ">
                                                <div className="cards-icon icon-xs icon-warning mr-2"></div>
                                                <p className="text text-capitalize font-weight-500">importante</p>
                                            </div>

                                            <p className="text-small text-capitalize font-weight-300">12/11/2021<span className="slash">/</span>13:23</p>
                                        </div>

                                        <p className="text-small font-weight-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="view-bottom-content">
                                {/* <Button
                                    className="button button-primary button-100"
                                // onClick={() => closeBox()}
                                >
                                    generar comentario
                                </Button> */}


                                <Button
                                    onClick={() => loadingButton()}
                                    className="button button-primary button-100"
                                >
                                    {
                                        loading ? (<Spinner />) : 'generar comentario'
                                    }

                                </Button>
                            </div>
                        </>
                    ) :
                    ''
            }
        </div>
    )
}

export default FormTicket
