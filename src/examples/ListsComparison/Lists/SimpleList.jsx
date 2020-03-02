import React from "react";

export const SimpleList = ({ ListItem, list }) => {
  return (
    <>
      {list.map(({ color, index }) => {
        return <ListItem key={index} title={index} color={color} />;
      })}
    </>
  );
};
