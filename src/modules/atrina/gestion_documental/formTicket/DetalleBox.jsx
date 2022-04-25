import React, { useState } from 'react'
import { Button } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { Spinner } from 'reactstrap'
import Badge from '@material-ui/core/Badge';

function notificationsLabel(count) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}


const DetalleBox = ({ openDetalleBox, closeBox }) => {
    // State loading btn 
    const [loading, setLoading] = useState(false)
    const loadingButton = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setEditBox(false)
        }, 3000)
    }

    // State editar bultos 
    const [editBox, setEditBox] = useState(false)
    const editarBulto = () => {
        setEditBox(true)
    }


    return (
        <div className={openDetalleBox ? 'sidebar-right sidebar-right-open view-scroll-y' : 'sidebar-right'}>
            {
                openDetalleBox ?
                    (
                        <>
                            <IconButton
                                onClick={() => closeBox()}
                                className="icon-small icon-button"
                            >
                                <i class="zmdi zmdi-close"></i>
                            </IconButton>

                            <div className="sidebar-right-content">
                                <h3 className="title-h3 text-capitalize mb-3 font-weight-900">Detalle caja</h3>
                            </div>

                            <div className="div-scroll">
                                {/* Caja 1  */}
                                <div className="sidebar-content pt-3">
                                    <div className="title-icon mb-3">
                                        <h5 className="title-h5 font-weight-900 mr-2">Caja 1</h5>

                                        <IconButton
                                            className="icon-large"
                                            aria-label={notificationsLabel(90)}
                                        >
                                            <Badge badgeContent={90} color="secondary">
                                                <i class="zmdi zmdi-dropbox"></i>
                                            </Badge>
                                        </IconButton>
                                    </div>

                                    {/* detalle caja 1  */}
                                    <div className="sidebar-box">
                                        <div className="title-between mb-2">
                                            <p className="text text-capitalize font-weight-900">
                                                máquinas trotadoras
                                            </p>
                                            <IconButton
                                                onClick={() => editarBulto()}
                                                className="icon-small">
                                                <i class="zmdi zmdi-edit"></i>
                                            </IconButton>
                                        </div>

                                        <p className="text font-weight-300 mb-1"><strong>Código Arancelario</strong><span className="slash">/</span>4567893</p>
                                        <p className="text font-weight-300"><strong>Bultos</strong><span className="slash">/</span>90</p>

                                        {
                                            editBox ?
                                                (
                                                    <>
                                                    {
                                                        loading ?
                                                            (
                                                                <div className="loagin-form-add">
                                                                    <Spinner />
                                                                </div>
                                                            
                                                            )
                                                            :
                                                            (
                                                                <form className="gestion mt-2">
                                                                    <div className="row">
                                                                        <div className="col-12 d-flex">
                                                                            <Input
                                                                                className="my-0 border-right-none input-add-cantida"
                                                                                placeholder="Bultos"
                                                                            />
                                                                            <Input
                                                                                className="my-0 border-right-none input-add-cantida"
                                                                                placeholder="Tipo Unidad"
                                                                            />
                                                                            <Input
                                                                                className="my-0 border-right-none input-add-cantida"
                                                                                placeholder="Peso Neto"
                                                                            />
                                                                            <Input
                                                                                className="my-0 input-add-cantida"
                                                                                placeholder="Peso Bruto"
                                                                            />
                                                                        </div>
                                                                        <div className="col-12 d-flex mt-1">
                                                                            <Button
                                                                                onClick={() => loadingButton()}
                                                                                className="button button-text button-text-danger"
                                                                            >
                                                                                editar
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            )
                                                    }

                                                    </>

                                                ) : null
                                        }
                                    </div>
                                </div>
                                
                                {/* Caja 2  */}
                                <div className="sidebar-content">
                                    <div className="title-icon mb-3">
                                        <h5 className="title-h5 font-weight-900 mr-2">Caja 2</h5>

                                        <IconButton
                                            className="icon-large"
                                            aria-label={notificationsLabel(90)}
                                        >
                                            <Badge badgeContent={90} color="secondary">
                                                <i class="zmdi zmdi-dropbox"></i>
                                            </Badge>
                                        </IconButton>
                                    </div>

                                    {/* detalle caja 1  */}
                                    <div className="sidebar-box">
                                        <div className="title-between mb-2">
                                            <p className="text text-capitalize font-weight-900">
                                                zapatillas
                                            </p>
                                            <IconButton
                                                onClick={() => editarBulto()}
                                                className="icon-small">
                                                <i class="zmdi zmdi-edit"></i>
                                            </IconButton>
                                        </div>

                                        <p className="text font-weight-300 mb-1"><strong>Código Arancelario</strong><span className="slash">/</span>4567893</p>
                                        <p className="text font-weight-300"><strong>Bultos</strong><span className="slash">/</span>90</p>
                                    </div>

                                    {/* detalle caja 2  */}
                                    <div className="sidebar-box">
                                        <div className="title-between mb-2">
                                            <p className="text text-capitalize font-weight-900">
                                                carcacas para celulares
                                            </p>
                                            <IconButton
                                                onClick={() => editarBulto()}
                                                className="icon-small">
                                                <i class="zmdi zmdi-edit"></i>
                                            </IconButton>
                                        </div>

                                        <p className="text font-weight-300 mb-1"><strong>Código Arancelario</strong><span className="slash">/</span>4567893</p>
                                        <p className="text font-weight-300"><strong>Bultos</strong><span className="slash">/</span>90</p>
                                    </div>
                                </div>

                                {/* Caja 3  */}
                                <div className="sidebar-content">
                                    <div className="title-icon mb-3">
                                        <h5 className="title-h5 font-weight-900 mr-2">Caja 3</h5>

                                        <IconButton
                                            className="icon-large"
                                            aria-label={notificationsLabel(90)}
                                        >
                                            <Badge badgeContent={90} color="secondary">
                                                <i class="zmdi zmdi-dropbox"></i>
                                            </Badge>
                                        </IconButton>
                                    </div>

                                    {/* detalle caja 1  */}
                                    <div className="sidebar-box">
                                        <div className="title-between mb-2">
                                            <p className="text text-capitalize font-weight-900">
                                                zapatillas
                                            </p>
                                            <IconButton
                                                onClick={() => editarBulto()}
                                                className="icon-small">
                                                <i class="zmdi zmdi-edit"></i>
                                            </IconButton>
                                        </div>

                                        <p className="text font-weight-300 mb-1"><strong>Código Arancelario</strong><span className="slash">/</span>4567893</p>
                                        <p className="text font-weight-300"><strong>Bultos</strong><span className="slash">/</span>90</p>
                                    </div>

                                    {/* detalle caja 2  */}
                                    <div className="sidebar-box">
                                        <div className="title-between mb-2">
                                            <p className="text text-capitalize font-weight-900">
                                                carcacas para celulares
                                            </p>
                                            <IconButton
                                                onClick={() => editarBulto()}
                                                className="icon-small">
                                                <i class="zmdi zmdi-edit"></i>
                                            </IconButton>
                                        </div>

                                        <p className="text font-weight-300 mb-1"><strong>Código Arancelario</strong><span className="slash">/</span>4567893</p>
                                        <p className="text font-weight-300"><strong>Bultos</strong><span className="slash">/</span>90</p>
                                    </div>
                                </div>
                            </div>

                            <div className="view-bottom-content background-danger">
                                <h4 className="title-h4 text-light text-capitalize mb-1 font-weight-900">Total cajas: 3</h4>
                                <p className="text-small text-light text-capitalize font-weight-500">peso neto: 12.670 kg <span className="slash">/</span> peso bruto: 14.678 kg</p>
                            </div>
                        </>
                    ) :
                    ''
            }
        </div>
    )
}

export default DetalleBox