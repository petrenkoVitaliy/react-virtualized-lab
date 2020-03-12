import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

/**
  simplified (skeleton) version of list item
 */

const useStyles = makeStyles({
  root: props => ({
    width: "100%",
    marginBottom: "20px",
    backgroundColor: props.color
  }),
  title: {
    fontSize: 14
  },
  image: { width: "30px", padding: "5px" },
  avatarsGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }
});

export const VirtualListItem = props => {
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Box className={classes.avatarsGroup}></Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
