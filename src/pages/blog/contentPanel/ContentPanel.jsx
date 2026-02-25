import { theme } from "antd";
import React from "react";

export default function ContentPanel() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div
      style={{
        padding: 24,
        minHeight: window.innerHeight - 64 - 50,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      ContentPanel
    </div>
  );
}
