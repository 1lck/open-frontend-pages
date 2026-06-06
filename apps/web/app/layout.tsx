import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Frontend Pages",
  description:
    "一个精选的开源前端页面与模板注册表，帮助你查找、预览、下载并安全复用可再分发的页面代码。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
