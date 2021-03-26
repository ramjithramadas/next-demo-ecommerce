import React, { useState, useContext, useEffect } from "react";
import { Grid, Typography, Button, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import productsStyles from "../styles/Products/Products.module.scss";
import Product from "./Product";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { ProductContext } from "./context/ProductContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const theme = createMuiTheme();

theme.typography.h4 = {
  fontSize: "1rem",
  color: "#333",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

const Products = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [imgUrl, setImgUrl] = React.useState("");
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
  });

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImage = (e) => {
    let path = URL.createObjectURL(e.target.files[0]);
    // console.log(path);
    setImgUrl(path);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      id: Math.random().toString(36).substr(2, 7),
      ...newProduct,
      img: imgUrl,
    };
    products.push(newItem);
    handleClose();
  };

  const [val, setVal] = useState(false);
 
  // console.log(val);
  useEffect(() => {
    if (localStorage.getItem("user")) {
       setVal(true);
      console.log("working")
      console.log(val)
    }
  }, [val]);

  return (
    <div className={productsStyles.container}>
      <Grid item xs={12} sm={4}>
        <div className={productsStyles.leftContent}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4">TRENDING NOW</Typography>
        </ThemeProvider>

        <Typography variant="p" paragraph>
          Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet.
        </Typography>
        <Button variant="contained" color="secondary">
          SHOP NOW
        </Button>
        {val ? (
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleOpen}
          >
            ADD ITEM
          </Button>
        ) : null}

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Add Product</h2>

              <form
                noValidate
                autoComplete="off"
                id="transition-modal-description"
                onSubmit={formSubmit}
              >
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  onChange={handleChange}
                  name="title"
                  value={newProduct.title}
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  name="description"
                  onChange={handleChange}
                  value={newProduct.description}
                />

                <TextField
                  name="upload-photo"
                  type="file"
                  onChange={handleImage}
                />
                <Button variant="contained" color="primary" type="submit">
                  SAVE
                </Button>
              </form>
            </div>
          </Fade>
        </Modal>
        </div>
      </Grid>
      <Grid container spacing={4} item xs={12} sm={8}>
        {products.map((product, key) => {
          return (
            <Grid item xs={12} sm={4}>
              
                <Product
                  id={key}
                  title={product.title}
                  description={product.description}
                  img={product.img}
                />
              
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
