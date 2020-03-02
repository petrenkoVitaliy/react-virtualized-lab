import React from "react";
import { List } from "react-virtualized";

export const VirtualList = ({ ListItem, list }) => {
  function rowRenderer({ key, index, isScrolling, isVisible, style }) {
    const item = list[index];
    return (
      <div style={style} key={key}>
        <ListItem title={item.index} color={item.color} />
      </div>
    );
  }

  return (
    <List
      width={500}
      height={700}
      rowCount={list.length}
      rowHeight={180}
      rowRenderer={rowRenderer}
    />
  );
};
