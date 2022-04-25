import React, { useState } from 'react'
import { Button } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import { Spinner } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import LoadingButton from '@material-ui/core/LoadingButton';
// import LoadingButton from '@mui/lab/LoadingButton';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

function notificationsLabel(count) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}

const DetalleBox = ({ openAddBox, closeBox, generarBox, loadingButtonConsolidar,loadingConsolidar}) => {

    // State loading agregar bultos a la casa
    const [loading, setLoading] = useState(false)
    const loadingButton = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    return (
        <div className={openAddBox ? 'sidebar-right sidebar-right-open view-scroll-y' : 'sidebar-right'}>
            {
                openAddBox ?
                    (
                        <>
                            <IconButton
                                onClick={() => closeBox()}
                                className="icon-small icon-button"
                            >
                                <i class="zmdi zmdi-close"></i>
                            </IconButton>

                            <div className="sidebar-right-content title-icon mb-3">
                                <h3 className="title-h3 text-capitalize mr-3 font-weight-900">Caja 1</h3>

                                <IconButton
                                    className="icon-large"
                                    aria-label={notificationsLabel(60)}
                                >
                                    <Badge badgeContent={60} color="secondary">
                                        <i class="zmdi zmdi-dropbox"></i>
                                    </Badge>
                                </IconButton>
                            </div>

                            <div className="div-scroll">
                                {/* Producto 1 */}
                                <div className="sidebar-content">
                                    <div className="title-between mb-2">
                                        <h5 className="title-h5 text-capitalize font-weight-900">
                                            Código Arancelario<span className="slash">/</span>4567893
                                        </h5>
                                        <IconButton className="icon-small">
                                            <i class="zmdi zmdi-delete"></i>
                                        </IconButton>
                                    </div>

                                    <p className="text font-weight-900 mb-2"><strong>Bultos</strong><span className="slash">/</span>120</p>
                                    <p className="text-small font-weight-700 mb-1">Descripción China</p>
                                    <p className="text-small font-weight-300 mb-2">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    <p className="text-small font-weight-700 mb-3">¿Cuántos bultos desea agregar a la caja?</p>
                                    {
                                        loading ?
                                            (
                                                <div className="loagin-form-add">
                                                    <Spinner />
                                                </div>
                                            
                                            )
                                            :
                                            (
                                                <form className="gestion">
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
                                                                agregar
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </form>
                                            )
                                    }

                                </div>

                                {/* Producto 2 */}
                                {/* <div className="sidebar-content">
                                    <div className="title-between mb-2">
                                        <h5 className="title-h5 text-capitalize font-weight-900">
                                            Código Arancelario<span className="slash">/</span>4567893
                                        </h5>
                                        <IconButton className="icon-small">
                                            <i class="zmdi zmdi-delete"></i>
                                        </IconButton>
                                    </div>

                                    <p className="text font-weight-900 mb-2"><strong>Bultos</strong><span className="slash">/</span>120</p>
                                    <p className="text-small font-weight-700 mb-1">Descripción China</p>
                                    <p className="text-small font-weight-300 mb-2">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    <p className="text-small font-weight-700 mb-3">¿Cuántos bultos desea agregar a la caja?</p>
                                    <form className="gestion">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <Input
                                                    className="my-0 border-right-none input-add-cantidad"
                                                    placeholder="100"
                                                />
                                                <Button
                                                    onClick={() => loadingButton()}
                                                    className="button button-icon button-danger button-height"
                                                >
                                                    {
                                                        loading ? (<Spinner />) : (<i class="zmdi zmdi-plus"></i>)
                                                    }

                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}

                                {/* Producto 3 */}
                                {/* <div className="sidebar-content">
                                    <div className="title-between mb-2">
                                        <h5 className="title-h5 text-capitalize font-weight-900">
                                            Código Arancelario<span className="slash">/</span>4567893
                                        </h5>
                                        <IconButton className="icon-small">
                                            <i class="zmdi zmdi-delete"></i>
                                        </IconButton>
                                    </div>

                                    <p className="text font-weight-900 mb-2"><strong>Bultos</strong><span className="slash">/</span>120</p>
                                    <p className="text-small font-weight-700 mb-1">Descripción China</p>
                                    <p className="text-small font-weight-300 mb-2">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    <p className="text-small font-weight-700 mb-3">¿Cuántos bultos desea agregar a la caja?</p>
                                    <form className="gestion">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <Input
                                                    className="my-0 border-right-none input-add-cantidad"
                                                    placeholder="100"
                                                />
                                                <Button
                                                    onClick={() => loadingButton()}
                                                    className="button button-icon button-danger button-height"
                                                >
                                                    {
                                                        loading ? (<Spinner />) : (<i class="zmdi zmdi-plus"></i>)
                                                    }

                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>

                            <div className="view-bottom-content d-flex">
                                <Button
                                    className="button button-gray button-100 mr-1"
                                    onClick={() => closeBox()}
                                >
                                    agregar producto
                                </Button>
                                <Button
                                    className="button button-primary button-100 ml-1"
                                    onClick={() => loadingButtonConsolidar()}
                                >
                                    {
                                        loadingConsolidar ? (<Spinner />) : 'Consolidar caja'
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

export default DetalleBox