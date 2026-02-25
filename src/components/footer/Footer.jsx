import { Layout } from "antd";

export default function Footer() {
  return (
    <Layout.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 50 }}>
      測試 ©{new Date().getFullYear()} Created by 頁尾
    </Layout.Content>
  );
}
