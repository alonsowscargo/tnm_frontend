import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import IntlMessages from 'util/IntlMessages';
import Field from '../components/form/Field'
import FieldAdornments from '../components/form/FieldAdornments'
import Loading from '../components/loading/Loading'
import {
    Button,
    Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import {
    hideMessage,
    showAuthLoader,
    userSignIn,
    // userFacebookSignIn,
    // userGithubSignIn,
    // userGoogleSignIn,
    // userTwitterSignIn
} from 'actions/Auth';

// message error
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loader, alertMessage, showMessage, authUser } = useSelector(({ auth }) => auth);
    const [errors, setErrors] = useState({
        error: "errorDefault"
    });
    const [alertMessageLocal, setAlertMessageLocal] = useState('');
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // function close message
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // Function watch password
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    useEffect(() => {
        if (showMessage) {
            setAlertMessageLocal(alertMessage);
            setOpen(true);
            dispatch(hideMessage());
        }
        if (authUser !== null) {
            props.history.push('/');
        }
    }, [showMessage, authUser, props.history, dispatch]);

    // onSubmit Form
    const SendSingIn = (e) => {
        e.preventDefault();
        setAlertMessageLocal('');
        setErrors(validateForm({ email, password }));

        if (Object.keys(errors).length === 0) {
            dispatch(showAuthLoader());
            dispatch(userSignIn({ email, password }));
        }
    }

    // onBlur Input
    const onBlurInput = () => {
        setErrors(validateForm({ email, password }));
    }

    // Function valadition form
    const validateForm = (form) => {
        let error = {};
        if (!form.email.trim()) {
            error.email = "Campo obligatorio";
        }
        if (!form.password.trim()) {
            error.password = "Campo obligatorio";
        }
        return error;
    }

    return (
        <div className="app-login-container">
            <div className="app-login">
                <div className="app-login-content">
                    <h1 className="title-h1 font-weight-600 pl-3">Bienvenido a TNM</h1>
                    <h2 className="text pl-3 mb-4">Iniciar Sesión</h2>

                    <form onSubmit={(e) => SendSingIn(e)}>
                        <Field
                            type="text"
                            label="Usuario"
                            placeholder="Ingresa tu usuario"
                            name="email"
                            className="mb-4"
                            value={email}
                            validations={errors.email}
                            handleBlur={onBlurInput}
                            onChange={(event) => setEmail(event.target.value)}
                            fullWidth
                        />

                        <FieldAdornments
                            label="Password"
                            placeholder="Ingresa tu contraseña"
                            name="password"
                            typeIcon="password"
                            className="mb-4"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            validations={errors.password}
                            state={showPassword}
                            handleBlur={onBlurInput}
                            onChange={(event) => setPassword(event.target.value)}
                            handleClick={handleClickShowPassword}
                            handlePassword={handleMouseDownPassword}
                            fullWidth
                        />

                        <div className="d-flex align-items-center justify-content-between">
                            <Button variant="contained" color="default" type="submit">
                                <IntlMessages id="appModule.signIn" />
                            </Button>
                        </div>
                    </form>

                    {
                        alertMessageLocal != '' ? (

                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error">
                                    {alertMessageLocal}
                                </Alert>
                            </Snackbar>
                            
                            // <FormControl required className="mt-3">
                            //     <FormHelperText>{alertMessageLocal}</FormHelperText>
                            // </FormControl>
                        ) : ''
                    }
                </div>
            </div>


            <div className="app-logo-content justify-center">
                <Link className="logo-lg" to="/" title="Jambo">
                    <img src={require("assets/images/LogoTnm-blanco.svg")} alt="Transporte nuevo mundo" title="Transporte nuevo mundo" draggable="false" />
                </Link>
            </div>

            {loader && <Loading />}

            {/* {showMessage && NotificationManager.error(alertMessage)}
            <NotificationContainer /> */}
        </div>
    );
};

export default SignIn;
