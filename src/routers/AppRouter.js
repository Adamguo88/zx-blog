import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import InitPage from "@/pages/blog/InitPage";
import About from "@/pages/About";
import ContentPanel from "@/pages/blog/contentPanel/ContentPanel";
// 所有route共用頁面 - 將 element: <Component /> 替換為 lazy 屬性
// const commonRouter = [
//   {
//     path: "announcement",
//     lazy: async () => {
//       const modules = await import("components/announcement/Announcement");
//       return { Component: modules.default };
//     },
//     handle: { title: "測試" },
//   },
// ];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <About /> },
        { path: "/components", element: <InitPage />, children: [{ index: true, element: <ContentPanel /> }] },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
    },
  },
);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
