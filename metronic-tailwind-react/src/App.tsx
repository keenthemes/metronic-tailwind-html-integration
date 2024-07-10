import Sidebar from './components/Sidebar.tsx';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import KTComponent from './metronic/core';
import { useEffect } from 'react';
import KTLayout from './metronic/app/layouts/demo1.js';
import SearchModal from "./components/SearchModal.tsx";

function App() {  
  useEffect(() => {
    KTComponent.init();
    KTLayout.init();
  }, []);

  return (
    <>
      <div className="flex grow">
        <Sidebar />
        <div className="wrapper flex grow flex-col">
          <Header />
          <main className="grow content pt-5" id="content" role="content">
          <div className="container-fixed" id="content_container">
          </div>
          <div className="container-fixed">
            {/* place your content here */}
          </div>
          </main>
          <Footer />
        </div>
      </div>
      <SearchModal />
    </>
  )
}

export default App
