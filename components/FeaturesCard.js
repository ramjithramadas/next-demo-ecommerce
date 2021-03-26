import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { features } from "../dummy";
import cardStyles from "../styles/FeaturesCard/Features.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "150px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
console.log(features);
const FeaturesCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}  style={{marginTop: "50px"}}>
      <Grid container spacing={3}>
        {features.map((feature) => {
          return (
            <Grid item xs={10} sm={4} >
              <CardContent>
                <Typography variant="h6" className={cardStyles.heading}>
                  {feature.title}
                </Typography>

                <Typography variant="body2" className={cardStyles.paragraph}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FeaturesCard;
