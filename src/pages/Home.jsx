import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
const { Header, Content } = Layout;
const items = [
  { key: "/", label: "首頁" },
  { key: "/components", label: "規格書" },
];
export default function Home() {
  const [current, setCurrent] = useState("/");
  const location = useLocation();
  const callRouter = useNavigate();
  const handleRouter = (router) => {
    callRouter(router.key);
  };
  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);
  return (
    <Layout style={{ display: "flex", flexWrap: "wrap" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>Logo</span>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: "flex-end" }}
          onClick={handleRouter}
          selectedKeys={[current]}
        />
      </Header>
      <Content style={{ height: "100%", width: "100%" }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
