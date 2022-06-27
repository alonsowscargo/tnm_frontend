import React, {useState} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';
import {
    // makeStyles,
    ListItemIcon,
    Checkbox,
    List,
    ListItemText,
    ListItem,
    Slide,
    Typography,
    IconButton,
    DialogContent,
    DialogActions,
    Dialog,
    Button
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const dataEmail = [
    {
        name: 'Benito Ramirez',
        email: 'bramirez@vannichile.cl'
    },
    {
        name: 'Lilian Arguedas',
        email: 'larguedas@transportesnm.cl'
    }
]


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        backgroundColor:"red"
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});


// const useStyles = makeStyles((theme) => ({
//     rootList: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: "blue",
//     },
// }));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});


const Modal = ({ open, onClose, setConfirmEmail, handleClick}) => {
    // const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const[loading, setLoading] = useState(false)

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleSubmitEmail = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onClose();
            handleClick();
        }, 5000);
        // onClose();
        // handleClick();
    }
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            TransitionComponent={Transition}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle className="px-5 pt-5" onClose={onClose}>
                Destinatarios
            </DialogTitle>

            <DialogContent className="px-5">
                <List>
                    {dataEmail.map((value, index) => {

                        return (
                            <ListItem key={index} divider={false}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        onChange={handleToggle(value)}
                                        checked={checked.indexOf(value) !== -1}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={value.name} secondary={value.email} />
                            </ListItem>
                        );
                    })}
                </List>


            </DialogContent>

            <DialogActions className='px-5 pb-5'>
                <Button
                    variant="contained"
                    size="medium"
                    // startIcon={<BsEnvelope />}
                    color="secondary"
                    onClick={() => {
                        // setConfirmEmail(true);
                        // setLoading(true);
                        // handleClick();
                        handleSubmitEmail();
                    }}
                >
                    { loading ? <CircularProgress color="inherit" size={24} />: "Enviar"}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal