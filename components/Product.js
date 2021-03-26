import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ProductContext } from "../components/context/ProductContext";
import React, { useContext, useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import productsStyles from "../styles/Products/Products.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

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

const Product = ({ id, title, description, img }) => {
  const [products, setProducts] = useContext(ProductContext);
  const classes = useStyles();
  const [editProduct, setEditProduct] = useState({
    title: "",
    description: "",
  });

  console.log(editProduct);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    var confirm = window.confirm("Are you sure?");

    if (confirm) {
      console.log("killadi");
      let prod = [...products];
      prod.splice(Number(id), 1);
      setProducts(prod);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      id: id,
      ...editProduct,
    };
    console.log(id);
    let editedItem = [...products];

    editedItem.splice(id, 1, newItem);
    setProducts(editedItem);
    handleClose();
  };

  const [val, setVal] = useState(false);
  console.log(val);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setVal(true);
      console.log("set",val)
    }
  }, []);
  console.log("afetr",val);
  return (
    
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={img}
            title="Headphone"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {val ? (
            <Button
              size="small"
              color="primary"
              type="button"
              onClick={handleOpen}
            >
              edit
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
                    defaultValue={title}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    name="description"
                    onChange={handleChange}
                    defaultValue={description}
                  />

                  <TextField
                    name="upload-photo"
                    type="file"
                    //defaultValue={img}
                  />
                  <Button variant="contained" color="primary" type="submit">
                    SAVE
                  </Button>
                </form>
              </div>
            </Fade>
          </Modal>
          {val ? (
            <Button size="small" color="primary" onClick={handleDelete}>
              Remove
            </Button>
          ) : null}
        </CardActions>
      </Card>
    
  );
};

export default Product;
