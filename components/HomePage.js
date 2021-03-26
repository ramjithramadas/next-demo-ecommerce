import Image from "next/image";
import homeStyles from "../styles/HomePage/HomePage.module.scss";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    marginTop: "20px",
  },
  
})(Typography);

const HomePage = () => {
  return (
    <Grid container spacing={3}>
      <div className={homeStyles.container}>
        <Grid item xs={6} className={homeStyles.leftSection}>
          <Typography className={homeStyles.leftHeading} variant="h4">
            The largest range
          </Typography>
          <WhiteTextTypography variant="h4" className={homeStyles.root}>
            OF SHOPPING
          </WhiteTextTypography>
          <Button variant="contained" color="secondary">
            SHOP NOW
          </Button>
        </Grid>
        <Grid item xs={6} className={homeStyles.rightSection}>
          <Image
            src="/ecommerce-main.png"
            alt="Picture of the author"
            width={550}
            height={550}
          />
        </Grid>
      </div>
    </Grid>
  );
};

export default HomePage;
