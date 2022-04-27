import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';

const GoodsItem = (props) => {
    const {name, price, setOrder, poster} = props;

    return (
        <Grid item xs={12} md={4} xl={3}>
            <Card sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={poster}
                    alt={name}
                    sx={{height: 140}}
                >
                </CardMedia>
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body1 ">Цена: {price} грн.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        endIcon={<ShoppingBasketTwoToneIcon />}
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >Купить</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;