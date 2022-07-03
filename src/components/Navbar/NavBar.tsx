import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo1.png";
import useStyles from "./styles";

export default function NavBar({ cart }: any) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to={"/"}
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Twilight Amber"
              height={"100px"}
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          <div>
            {location.pathname !== "/cart" && (
              <IconButton
                component={Link}
                to={"/cart"}
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cart.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
