



const ModalForm = () => {
  return (
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

            <TextField name="upload-photo" type="file" onChange={handleImage} />
            <Button variant="contained" color="primary" type="submit">
              SAVE
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalForm;
