import React from "react";
import { List } from "react-virtualized";

/**
  There is a problem with scrolling wia scrollbar' thumb (by mouse)
  it is lagging (even with skeletom items)
  TODO
 */

export const VirtualList = ({ ListItem, VirtualListItem, list }) => {
  function rowRenderer({ key, index, isScrolling, isVisible, style }) {
    const item = list[index];
    return (
      <div style={style} key={key}>
        {isScrolling ? (
          <VirtualListItem title={item.index} color={item.color} />
        ) : (
          <ListItem title={item.index} color={item.color} />
        )}
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
      overscanRowCount={50}
    />
  );
};
