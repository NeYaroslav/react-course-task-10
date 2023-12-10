"use client";

import { useEffect, useState } from "react";
import { MenuItem } from "../menuItem/MenuItem";
import { getId } from "../../utils/helpers";

export const Menu = () => {
  const [list, setList] = useState(undefined);

  useEffect(() => {
    setList([
      {
        text: "A same origin link",
        url: `${window.location.origin}/unexisting-page`,
      },
      { text: "Another origin link", url: "https://www.google.com" },
      { text: "Pure text" },
    ]);
  }, []);

  return (
    <ul>
      {Array.isArray(list) &&
        list.map((listItem) => (
          <MenuItem
            text={listItem.text}
            url={listItem.url}
            key={getId()}
          />
        ))}
    </ul>
  );
};
