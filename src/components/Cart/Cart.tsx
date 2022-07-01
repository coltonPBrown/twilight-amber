import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

export default function Cart({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}: any) {
  const isEmpty = cart.total_items === 0;
  const classes = useStyles();
  if (!cart) return <>Loading...</>;
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      Your cart is empty.{" "}
      <Link className={classes.link} to={"/"}>
        Add some items!
      </Link>
    </Typography>
  );
  console.log("Cart = " + cart);
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item: any) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => handleEmptyCart()}
          >
            {"Empty Cart"}
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            {"Checkout"}
          </Button>
        </div>
      </div>
    </>
  );

  console.log(cart);

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}
