import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import KTComponent from './theme/core/index.spa.js';
import { useEffect } from 'react';
import KTLayout from './theme/app/layouts/demo1.js';


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
    </>
  )
}

export default App
