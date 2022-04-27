import {Alert, Snackbar} from "@mui/material";

const Snack = ({open, handleClose}) => {
    return(
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert severity="success">
                Добавлено в корзину
            </Alert>
        </Snackbar>
    )
}
export default Snack;