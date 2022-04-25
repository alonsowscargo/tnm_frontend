import React, { Fragment, useState } from 'react'
import documento from './uno.png'
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'reactstrap';
import { Spinner } from 'reactstrap'
import ValidarPackingList  from './ValidarPackingList'

const ValidarInvoce = ({ handlebackaddCargaManual, handleback }) => {


    const [validationFile, setValidationFile] = useState(0)
    const [validationButton, setValidationButton] = useState(false)
    const [loading, setLoading] = useState(false)

    const validarFilePacakingList = () => {
        setValidationFile(1)
    }

    // const backValidation

    // State loading button validar invoce
    const loadingButtonValidar = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setValidationButton(true)
        }, 3000)
    }





    return (
        <div className="row">
            {
                validationFile === 0 ?
                    (
                        <Fragment>
                            <div className="col-6 view-100vh px-0">
                                <div className="content-title title-icon">

                                    <IconButton
                                        onClick={() => handlebackaddCargaManual()}
                                        className="icon-small"
                                    >
                                        <i className="zmdi zmdi-chevron-left"></i>
                                    </IconButton>

                                    <h3 className="title-h3 text-ligh font-weight-900">
                                        Antiguo Invoce / Comercial DLL Spa
                                    </h3>
                                </div>

                                <div className="iframe">
                                    <img src={documento} alt="" draggable="false" />
                                </div>
                            </div>

                            <div className="col-6 view-100vh box-shadow-left px-0">
                                <div className="content-title">
                                    <h3 className="title-h3 text-ligh font-weight-900">
                                        Nuevo Invoce / Comercial DLL Spa
                                    </h3>
                                </div>
                                <div className="iframe">
                                    <img src={documento} alt="" draggable="false" />
                                </div>

                                <div className="content-buttons content-bottom">
                                    {
                                        validationButton ?
                                        (
                                            <>
                                            <Button className="button button-success button-50 ml-1"
                                                >
                                                    Descargar Invoce
                                                </Button>
                                                <Button className="button button-primary button-50 ml-1"
                                                onClick={() => validarFilePacakingList()}
                                                >
                                                    siguiente
                                                </Button>
                                            </>
                                        )
                                        :
                                        (
                                            <Button className="button button-primary button-50 ml-1"
                                            onClick={() => loadingButtonValidar()}
                                            >
                                                {
                                                    loading ? (<Spinner />) : 'Validar Invoce'
                                                }
                                            </Button>
                                        )
                                    }
                                </div>
                            </div>
                        </Fragment>
                    )
                    :
                    null
            }

            {
                validationFile === 1 ?
                (<ValidarPackingList 
                    validationButton={validationButton} 
                    loading={loading}
                    loadingButtonValidar={loadingButtonValidar}
                    handleback={handleback}
                />)
                :''
            }
            
        </div>
    )
}

export default ValidarInvoce
