import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { ListItem, VirtualListItem } from "../ListItems";

/**
  List is wrapped in container with 
  persistant drawer to check list rerendering speed
  meterialUi used here and everywhere to make components 'heavier'
 */

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  listWrapper: {
    width: "500px",
    height: "700px",
    overflow: "auto",
    position: "relative"
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    background: "black",
    flexShrink: 0
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    marginLeft: drawerWidth
  }
}));

export const ListWrapper = ({ List, listSize }) => {
  const templateList = Array.from(Array(listSize), (e, i) => ({
    index: i + 1,
    color: getRandomColor()
  }));

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <Box>
      <Button size="small" onClick={() => setOpen(!open)}>
        Toggle
      </Button>
      <div className={classes.listWrapper} id="qqq">
        <Drawer
          className={classes.drawer}
          variant="persistent"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
          ModalProps={{
            container: document.getElementById("qqq"),
            style: { position: "absolute" }
          }}
          PaperProps={{ style: { position: "absolute" } }}
          BackdropProps={{ style: { position: "absolute" } }}
        >
          Drawer
        </Drawer>
        <Box className={`${classes.content} ${open && classes.contentShift}`}>
          <List
            ListItem={ListItem}
            VirtualListItem={VirtualListItem}
            list={templateList}
          />
        </Box>
      </div>
    </Box>
  );
};
