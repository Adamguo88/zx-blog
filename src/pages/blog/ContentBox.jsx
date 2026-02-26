import React from "react";
import { theme } from "antd";

export default function ContentBox({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div
      style={{
        padding: 24,
        height: "100%",
        width: "100%",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        // overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}
