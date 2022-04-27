import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";


function Header({handleCart, orderLenght}) {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >Mui shop</Typography>
                <IconButton color="inherit"
                            onClick={handleCart}
                >
                   <Badge color="secondary" badgeContent={orderLenght}>
                       <ShoppingBasket/>
                   </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;