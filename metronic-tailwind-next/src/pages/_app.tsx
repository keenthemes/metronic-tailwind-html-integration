import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SearchModal from "@/components/SearchModal";
import {useEffect} from "react";
import KTComponent from "@/metronic/core";
import KTLayout from "@/metronic/app/layouts/demo1";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("../metronic/vendors/keenicons/outline/style.css");
    require("../metronic/vendors/keenicons/solid/style.css");
    require("../metronic/vendors/keenicons/filled/style.css");

    if (typeof window !== 'undefined') {
      KTComponent.init();
      KTLayout.init();
    }
  }, []);

  return <>
      <div className="flex grow">
        <Sidebar />
        <div className="wrapper flex grow flex-col">
          <Header />
          <main className="grow content pt-5" id="content" role="content">
          <div className="container-fixed" id="content_container">
          </div>
          <div className="container-fixed">
            <Component {...pageProps} />
          </div>
          </main>
          <Footer />
        </div>
      </div>
      <SearchModal />
    </>
}
