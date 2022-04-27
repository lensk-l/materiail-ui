import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon><ShoppingCartTwoToneIcon/></ListItemIcon>
                    <ListItemText primary='Корзина'/>
                </ListItem>
            </List>
            <Divider/>
            {!order.length
                ? <ListItem>Корзина пуста</ListItem>
                : (
                    <>
                        {order.map((item) => (
                            <BasketItem {...item}
                                        order={order}
                                        key={item.name}
                                        removeFromOrder={removeFromOrder}
                            />))}
                        <Divider/>
                        <ListItem>
                            <Typography variant="h6">
                                Общая стоимость: {' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity
                                }, 0)}{' '}
                                грн.
                            </Typography>
                        </ListItem>
                    </>
                )
            }
        </Drawer>
    )

}
export default Basket;