import React from "react";
import { Layout, Icon, Avatar, Popover } from "antd";
import { inject, observer } from "mobx-react";
import "./Header.scss";

const { Header } = Layout;

const MainHeader = () => {
  const content = (
    <div>
      <span style={{ cursor: "pointer" }}>Logout</span>
    </div>
  );
  return (
    <Header collapsible className="header">
      {/* <Icon
        className="trigger"
        type={globals.collapsed ? "menu-unfold" : "menu-fold"}
        onClick={globals.toggle}
      /> */}
    </Header>
  );
};

export default MainHeader;
