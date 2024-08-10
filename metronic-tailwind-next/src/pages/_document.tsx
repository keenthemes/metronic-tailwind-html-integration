import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full light" data-theme="true" lang="en">
        <Head />
        <body className="antialiased flex h-full demo1 sidebar-fixed header-fixed bg-[#fefefe] dark:bg-coal-500">
            <Main/>
            <NextScript/>
        </body>
    </Html>
  );
}
