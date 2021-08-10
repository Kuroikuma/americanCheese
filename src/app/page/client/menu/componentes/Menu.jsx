import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Header from "../../../../components/header/header";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 360,
    boxShadow: "1px 4.5px 4.5px rgba(0,0,0,0.3)",
  },
  center: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
  media: {
    height: 120,
  },
  tittle: {
    fontSize: "1.25rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "bold",
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
    color: "#3f51b5",
  },
  bar: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    backgroundColor: "rgba(190,190,190)",
    width: "89%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "15px",
    marginBottom: "30px",
    marginTop: "20px",
  },
});

const Menu = (props) => {
  const apiUrl = "https://localhost:44323/";
  const { data, tittle } = props;

  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.bar}>
        <h1 className={classes.tittle}>{tittle}</h1>
        <Button size="small">
          <Badge badgeContent={5} color="secondary">
            <ShoppingCartIcon fontSize="large" color="primary" />
          </Badge>
        </Button>
      </div>
      <div className={classes.center}>
        {data
          ? data.map((info) => (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    alt={info.nombre}
                    image={`${apiUrl}${info.imagen}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {info.Producto}
                    </Typography>
                    <Typography>{`C$ ${info.precio}`}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {info.descripcion}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <AddShoppingCartIcon />
                  </Button>
                  <Button size="small" color="primary">
                    <strong>Leer más</strong>
                  </Button>
                </CardActions>
              </Card>
            ))
          : null}
      </div>
    </>
  );
};
export default Menu;
