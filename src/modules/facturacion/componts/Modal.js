import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';
import {
    makeStyles,
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
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});


const useStyles = makeStyles((theme) => ({
    rootList: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


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

const Modal = ({ open, onClose, }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);

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

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            TransitionComponent={Transition}
            fullWidth="sm"
            maxWidth="sm"
        >
            <DialogTitle id="customized-dialog-title" onClose={onClose}>
                Destinatarios
            </DialogTitle>
            <DialogContent dividers>
                <List dense className={classes.root}>
                    {dataEmail.map((value) => {

                        return (
                            <ListItem key={value} divider={false}>
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

            <DialogActions className='py-3'>
                <Button
                    variant="contained"
                    size="medium"
                    // startIcon={<BsEnvelope />}
                    color="secondary"
                    onClick={onClose}
                >
                    Enviar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal