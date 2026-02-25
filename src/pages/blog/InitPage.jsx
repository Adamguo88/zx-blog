import React from "react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";

const { Sider } = Layout;
const items = Array.from({ length: 10 }).map((_, index) => ({
  key: String(index + 1),
  icon: React.createElement([UserOutlined, VideoCameraOutlined, UploadOutlined][index % 3]),
  label: `選單項目 ${index + 1}`,
}));
export default function InitPage() {
  return (
    <Row wrap>
      <Col flex={"200px"}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            overflow: "auto", // 當選單超出時允許滾動
            height: "calc(100vh - 64px)",
            position: "fixed", // 固定在左側
            left: 0,
            top: 64,
            bottom: 0,
            zIndex: "999",
          }}
        >
          <div className="demo-logo-vertical" style={{ height: 32, margin: 16, background: "rgba(255,255,255,.2)" }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={items} />
        </Sider>
      </Col>
      <Col flex={"auto"}>
        <Row wrap>
          <Col span={24} style={{ padding: 24 }}>
            <Outlet />
          </Col>
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
