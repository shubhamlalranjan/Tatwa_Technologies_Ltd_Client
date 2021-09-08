import React, { useState, useEffect } from "react";

import { loadCSS } from "fg-loadcss";
import Swal from "sweetalert2";

import MenuItem from "./MenuItem";
import { GetUserMenu } from "../../api/user";

export default function DrawerMenuList() {
  const [expanded, setExpanded] = useState(false);
  const [MenuListData, setMenuListData] = useState([]);

  const handleChange = (panelName) => {
    if (expanded === panelName) {
      setExpanded(false);
    } else {
      setExpanded(panelName);
    }
  };
  const GetMenuData = async () => {
    const response = await GetUserMenu("002");
    if (!response.ok) {
      console.log("error", response);
      return await Swal.fire(
        response.problem,
        "Error While Adding User!",
        "error"
      );
    }
    if (response.data.data) setMenuListData(response.data.data);
  };
  useEffect(() => {
    GetMenuData();
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div>
      {MenuListData.map((item) => (
        <MenuItem
          data={item}
          key={item.key}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}
