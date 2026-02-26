import { useState, useEffect } from "react";
// 定義斷點數值
const breakpoints = {
  xxxl: 1920,
  xxl: 1600,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
};
const getBreakpoint = (width) => {
  if (width >= breakpoints.xxxl) return "xxxl";
  if (width >= breakpoints.xxl) return "xxl";
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return "xs";
};
export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(() => getBreakpoint(window.innerWidth));
  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      // 使用 Debounce 優化效能，避免頻繁更新
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setBreakpoint(getBreakpoint(window.innerWidth));
      }, 150); // 150ms 的延遲
    };
    window.addEventListener("resize", handleResize);
    // 清除監聽器
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return breakpoint;
}
