import React from "react";
import { Link } from "react-router-dom";

import { RoutesMap } from "./routes";

export const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={RoutesMap.simpleList}>Simple List</Link>
      </li>
    </ul>
  </div>
);
