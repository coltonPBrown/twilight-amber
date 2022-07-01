import { Grid } from "@material-ui/core";
import Product from "./Product";
import useStyles from "./styles";

function Products({ products, onAddToCart }: any) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <br />
      <br />
      <Grid container justify="center" spacing={4}>
        {products.map((product: any) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product onAddToCart={onAddToCart} product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
