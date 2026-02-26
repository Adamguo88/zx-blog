import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Flex, Layout, Menu, Row } from "antd";

import useBreakpoint from "@/hooks/useBreakpoint";
import Footer from "@/components/footer/Footer";

const { Sider } = Layout;
// const initItem = Array.from({ length: 50 }).map((_, index) => ({
//   key: String(index + 1),
//   label: `選單項目 ${index + 1}`,
// }));
const initItem = [{ key: "ContentPanel", label: "ContentPanel" }];
export default function InitPage() {
  const screen = useBreakpoint();

  return (
    <Flex justify="flex-end">
      <Sider
        trigger={null}
        collapsedWidth={80}
        collapsed={["xs", "sm", "md", "lg"].includes(screen)}
        width={["xs", "sm", "md", "lg"].includes(screen) ? 80 : 200}
        style={{
          overflow: "auto", // 當選單超出時允許滾動
          position: "fixed", // 固定在左側
          left: 0,
          top: 64,
          bottom: 0,
          zIndex: "999",
        }}
      >
        <div className="demo-logo-vertical" style={{ height: 32, margin: 16, background: "rgba(255,255,255,.2)" }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={initItem} />
      </Sider>
      <Row style={{ height: "100%", width: ["xs", "sm", "md", "lg"].includes(screen) ? "calc(100% - 80px)" : "calc(100% - 200px)" }}>
        <Col span={24} style={{ padding: 24, height: "calc(100% - 50px)", width: "" }}>
          <Outlet />
        </Col>
        <Col span={24} style={{ height: 50 }}>
          <Footer />
        </Col>
      </Row>
      {/* <Row wrap style={{ width: "100%", height: "100%" }}>
      <Col flex={["xs", "sm", "md", "lg"].includes(screen) ? "80px" : "200px"}>
        
      </Col>
      <Col flex={"auto"}>
        <Row style={{ height: "100%" }}>
          <Col span={24} style={{ padding: 24, height: "calc(100% - 50px)",width:"" }}>
            <Outlet />
          </Col>
          <Col span={24} style={{ height: 50 }}>
            <Footer />
          </Col>
        </Row>
      </Col>
    </Row> */}
    </Flex>
  );
}
