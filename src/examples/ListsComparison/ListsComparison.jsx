import React from "react";
import Box from "@material-ui/core/Box";

import { ListWrapper } from "./ListWrapper";
import { SimpleList, VirtualList } from "./Lists";
import { makeStyles } from "@material-ui/core/styles";

const listSize = 300;

const useStyles = makeStyles(theme => ({
  listsComparisonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100wv"
  }
}));

export const ListsComparison = () => {
  const classes = useStyles();

  return (
    <Box className={classes.listsComparisonWrapper}>
      <ListWrapper listSize={listSize} List={SimpleList} />
      <ListWrapper listSize={listSize} List={VirtualList} />
    </Box>
  );
};
