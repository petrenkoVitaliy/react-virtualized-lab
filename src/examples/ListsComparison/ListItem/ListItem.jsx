import dansPhoto from "./img/dan.jpg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

const imagesCount = 10;

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

export const ListItem = props => {
  const classes = useStyles(props);
  const images = Array(imagesCount).fill(1);

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
        <Box className={classes.avatarsGroup}>
          {images.map((j, i) => (
            <Avatar
              key={i}
              className={classes.image}
              src={dansPhoto}
              alt="logo"
            />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
